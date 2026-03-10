import { getSupabase } from './supabase';

const FALLBACK_EDUCATION = [
  {
    id: 'berkeley',
    name: 'UC Berkeley',
    logo: 'berkeley_logo.png',
    link: 'https://eecs.berkeley.edu/',
  },
];

export async function fetchEducation() {
  const supabase = getSupabase();
  if (!supabase) return FALLBACK_EDUCATION;
  try {
    const { data, error } = await supabase
      .from('education')
      .select('id, name, logo, link')
      .order('sort_order', { ascending: true });
    if (!error && data?.length) return data;
  } catch (_) {}
  return FALLBACK_EDUCATION;
}
