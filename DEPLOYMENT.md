# Deployment (Vercel)

## Build

- **Build command:** `npm run build` (or `next build`)
- **Output:** Next.js default (`.next`); Vercel runs `next build` automatically.
- **Node:** Use Node 18+ (Vercel default is fine).

## Environment variables (Vercel project settings)

| Variable | Required | Notes |
|----------|----------|--------|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Project URL from Supabase dashboard (e.g. `https://xxx.supabase.co`) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes | Anon/public key from Supabase → Settings → API |
| `RESEND_API_KEY` | Optional | For contact form email; omit if you don’t use the form |

After adding env vars, trigger a new deployment so they take effect.

## Mobile responsiveness checklist

Test these viewport widths in Chrome DevTools (Device Toolbar) or on real devices:

| Width | Device type | What to check |
|-------|-------------|----------------|
| 320px | Small phone | No horizontal scroll; nav, forms, and cards fit; text doesn’t overflow |
| 375px | iPhone SE / narrow | Same as above |
| 390px | iPhone 14 | Bottom nav, phone frame, and grids look correct |
| 480px | Large phone | Breakpoint used across site; typewriter and labels wrap |
| 768px | Tablet | About/Projects/Contact layout stacks or adapts |
| 968px | Small desktop | Section widths and spacing |
| 1024px+ | Desktop | Full layout; phone frame centered |

**Pages to test:** Home, Projects, About, Contact, one Experience detail (`/experience/[id]`).

**Quick checks:**

- No horizontal scroll at any width.
- Tap targets (nav, buttons, links) are easy to hit (~44px min).
- Forms (Contact) are usable; inputs and labels don’t overflow.
- Images (projects, logos) scale and don’t overflow.

## Post-deploy

- **Supabase:** Open `https://your-site.vercel.app/api/supabase-health` to confirm `connected: true`.
- **Contact form:** If you use Resend, send a test message after setting `RESEND_API_KEY`.
