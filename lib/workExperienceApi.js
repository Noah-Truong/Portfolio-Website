import { getSupabase } from './supabase';
import FALLBACK_WORK_EXPERIENCE from './workExperience';

export async function fetchWorkExperience() {
  const supabase = getSupabase();
  if (!supabase) return FALLBACK_WORK_EXPERIENCE;
  try {
    const { data, error } = await supabase
      .from('work_experience')
      .select('id, org, logo, position, description, details')
      .order('sort_order', { ascending: true });
    if (!error && data?.length) return data;
  } catch (_) {}
  return FALLBACK_WORK_EXPERIENCE;
}

export async function fetchWorkExperienceById(id) {
  const supabase = getSupabase();
  if (!supabase) {
    return FALLBACK_WORK_EXPERIENCE.find((exp) => exp.id === id) ?? null;
  }
  try {
    const { data, error } = await supabase
      .from('work_experience')
      .select('id, org, logo, position, description, details')
      .eq('id', id)
      .single();
    if (!error && data) return data;
  } catch (_) {}
  return FALLBACK_WORK_EXPERIENCE.find((exp) => exp.id === id) ?? null;
}
