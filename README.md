# Koranyq — Consultancy Landing Page

A responsive, static, AI-centric business website for **Koranyq**. No framework, npm, server, API keys, or build step required.

## Deploy to GitHub Pages

1. Create a GitHub repository (for example `koranyq-website`).
2. Upload the contents of this folder to the **root** of the repository, including `index.html`, `styles.css`, `script.js`, `assets/`, and `.nojekyll`.
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, select **Deploy from a branch**. Choose `main` and `/ (root)`, then save.
5. Wait for GitHub to publish the site. Your URL will usually be `https://YOUR_USERNAME.github.io/koranyq-website/`.
6. For a custom domain, configure the DNS records and custom domain in GitHub Pages settings. Enable **Enforce HTTPS** when available.

## Customize before launch

- **Contact:** Replace `karukurobert@gmail.com` throughout `index.html` if you want a dedicated business inbox such as `hello@yourdomain`.
- **Social links:** Add your actual LinkedIn and GitHub URLs after verifying them. No placeholders or invented profile URLs are included.
- **Case studies:** Replace experience summaries with permission-cleared client outcomes as you obtain them.
- **Business claims:** The founder's 6+ years, technologies and prior roles are grounded in the supplied resume. Work-in-progress projects are described as engineering experience, not as shipped client products.
- **Open Graph preview:** `assets/og-cover.svg` is included; for more reliable social sharing, export it to a 1200×630 PNG and update the `og:image` meta tag to that PNG's public absolute URL after deployment.
- **Analytics:** Add privacy-conscious analytics only after you decide on your data policy.

## Limitations

The primary CTA opens an email draft. This is intentional: a GitHub Pages site cannot securely process a contact form without an external service. Add a vetted third-party form service or scheduling link if you want direct submissions/bookings. Do not put API keys in client-side JavaScript.

## Files

- `index.html`: semantic site markup, SEO metadata and business content.
- `styles.css`: responsive dark visual system and motion.
- `script.js`: mobile navigation, scroll reveals, copyright year.
- `assets/logo.svg`: original scalable geometric K mark.
- `assets/og-cover.svg`: social preview artwork.
- `.nojekyll`: disable Jekyll processing.
