# Supabase setup

## 1. Tables and RLS

Run in **SQL Editor** (in order):

1. `schema.sql` – creates `projects`, `work_experience`, and `education` tables and read-only RLS.
2. `seed.sql` – inserts your current projects, work experience, and education.

## 2. Storage (images on Supabase)

Run in **SQL Editor**:

3. `storage.sql` – creates a public bucket named `portfolio` for images (5MB max, jpeg/png/gif/webp).

### Uploading images

- In the dashboard: **Storage** → open the `portfolio` bucket → **Upload file**.
- You can use folders, e.g. `projects/dcConverter.png`, `logos/uavs.png`.

### Public URL format

After upload, the public URL for a file is:

```
https://<YOUR_PROJECT_REF>.supabase.co/storage/v1/object/public/portfolio/<path-in-bucket>
```

Example: if you upload `dcConverter.png` at the root of `portfolio`:

```
https://abcdefghijk.supabase.co/storage/v1/object/public/portfolio/dcConverter.png
```

### Using Storage URLs in your data

You can store **full image URLs** or **paths** in the `image` / `logo` columns:

- **Full URL** (e.g. from Supabase Storage): paste the full URL (e.g. `https://<project>.supabase.co/storage/v1/object/public/portfolio/dcConverter.png`) into the column; the app uses it as-is.
- **Path** (e.g. `dcConverter.png`): the app builds the Supabase Storage URL when `NEXT_PUBLIC_SUPABASE_URL` is set, or serves from `/assets/` when it’s not.

- **Option A – Dashboard:** In **Table Editor** → `projects`, `work_experience`, or `education`, set `image` or `logo` to the full URL or path.
- **Option B – SQL:** Run `UPDATE` statements, e.g.:

```sql
update public.projects
set image = 'https://YOUR_PROJECT_REF.supabase.co/storage/v1/object/public/portfolio/dcConverter.png'
where id = 'project1';
```

- **Option C – Keep local paths:** Leave `image`/`logo` as `/assets/...` and keep files in `public/assets/`. The app supports both local paths and full Supabase URLs.

Replace `YOUR_PROJECT_REF` with your project reference (from **Settings** → **API** → Project URL). with your project reference (from **Settings** → **API** → Project URL).
