/**
 * Returns the URL to use in <img src="..."> for a value from Supabase (image/logo column).
 * - Full URL (http/https) → returned as-is (trimmed). Use directly in src.
 * - Path with NEXT_PUBLIC_SUPABASE_URL set → resolved to Supabase Storage public URL.
 * - Otherwise → resolved to local /assets/ path.
 */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

/** True if value is already a full URL (use as-is in img src). */
export function isStorageUrl(value) {
  if (value == null || typeof value !== 'string') return false;
  const v = value.trim().replace(/\s+/g, ' ');
  return v.startsWith('http://') || v.startsWith('https://');
}

/** Use for img src: normalizes URL (trim, single line) or returns resolved path. */
export function getStorageImageUrl(value) {
  if (value == null) return '';
  const raw = typeof value === 'string' ? value : String(value);
  const v = raw.trim().replace(/\s+/g, ' ').trim();
  if (v === '') return '';
  if (v.startsWith('http://') || v.startsWith('https://')) return v;
  const path = v.replace(/^\//, '');
  if (supabaseUrl && path) {
    return `${supabaseUrl.replace(/\/$/, '')}/storage/v1/object/public/portfolio/${path}`;
  }
  if (!path) return v || '';
  return path.startsWith('assets/') ? `/${path}` : `/assets/${path}`;
}
