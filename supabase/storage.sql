-- Run this in the Supabase SQL Editor to create a public bucket for portfolio images.
-- After running, upload images in Dashboard → Storage → portfolio (or via API).

-- Create public bucket "portfolio" for project images and logos
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'portfolio',
  'portfolio',
  true,
  5242880,
  array['image/jpeg', 'image/png', 'image/gif', 'image/webp']
)
on conflict (id) do update set
  public = true,
  file_size_limit = 5242880,
  allowed_mime_types = array['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

-- Allow anyone to read (get) objects in this bucket
create policy "Public read access for portfolio bucket"
  on storage.objects for select
  using (bucket_id = 'portfolio');

-- Optional: allow authenticated uploads (e.g. from a future admin). For now, you can upload via Dashboard.
-- create policy "Allow authenticated uploads to portfolio"
--   on storage.objects for insert
--   with check (bucket_id = 'portfolio' and auth.role() = 'authenticated');
