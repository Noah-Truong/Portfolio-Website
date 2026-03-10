import { getSupabase } from '@/lib/supabase';

/**
 * GET /api/supabase-health
 * Verifies Supabase connection by querying each table.
 */
export async function GET() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return Response.json(
      {
        connected: false,
        error: 'Missing env',
        message:
          'Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local.',
        env: { hasUrl: !!supabaseUrl, hasAnonKey: !!supabaseAnonKey },
      },
      { status: 200 }
    );
  }

  const urlValid =
    typeof supabaseUrl === 'string' &&
    (supabaseUrl.startsWith('https://') || supabaseUrl.startsWith('http://')) &&
    supabaseUrl.includes('supabase.co');
  if (!urlValid) {
    return Response.json(
      {
        connected: false,
        error: 'Invalid URL',
        message: 'NEXT_PUBLIC_SUPABASE_URL should be like https://xxx.supabase.co',
      },
      { status: 200 }
    );
  }

  try {
    const supabase = getSupabase();
    if (!supabase) {
      return Response.json(
        { connected: false, error: 'Client null', message: 'getSupabase() returned null.' },
        { status: 200 }
      );
    }

    const [projectsRes, workRes, educationRes] = await Promise.all([
      supabase.from('projects').select('*', { count: 'exact', head: true }),
      supabase.from('work_experience').select('*', { count: 'exact', head: true }),
      supabase.from('education').select('*', { count: 'exact', head: true }),
    ]);

    const err = projectsRes.error || workRes.error || educationRes.error;
    if (err) {
      return Response.json(
        {
          connected: false,
          error: 'Table error',
          message: err.message,
          hint: 'Run supabase/schema.sql in Supabase SQL Editor if tables are missing.',
        },
        { status: 200 }
      );
    }

    return Response.json({
      connected: true,
      message: 'Supabase is connected.',
      url: supabaseUrl.replace(/\/$/, ''),
      tables: {
        projects: projectsRes.count,
        work_experience: workRes.count,
        education: educationRes.count,
      },
    });
  } catch (e) {
    return Response.json(
      { connected: false, error: 'Exception', message: e?.message || String(e) },
      { status: 200 }
    );
  }
}
