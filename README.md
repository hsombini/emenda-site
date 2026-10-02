# emenda-site (moved)

**This repo is retired.** Since 2026-10-02 the site at https://emenda.varella.ovh is served from
`www/emenda.varella.ovh/` in [hsombini/sites](https://github.com/hsombini/sites): one nginx
container on sv01fipe (Coolify app `sites`), Cloudflare A record `emenda → 89.106.84.199`
(DNS only, Let's Encrypt via Traefik). Edit the site there; pushing to its `main` redeploys.

GitHub Pages stays enabled with the `emenda.varella.ovh` custom domain only so old
`hsombini.github.io/emenda-site/*` links keep redirecting to the live site. Changes made
here are not deployed.
