# D.D.B. Farms and Trading

Static website for D.D.B. Farms and Trading. This site is built with simple HTML, CSS, and JavaScript.

## Local preview

Open `index.html` directly in a browser, or run a local server:

```bash
cd "e:\project\Farm-website"
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Initialize a Git repository:

```bash
git init
git add .
git commit -m "Initial site setup"
```

2. Create a new repository on GitHub and add it as a remote:

```bash
git remote add origin https://github.com/<your-username>/<your-repo>.git
git branch -M main
git push -u origin main
```

3. A `CNAME` file is included in this repo to configure the custom domain `ddbfarms.com`.
4. In GitHub, go to `Settings > Pages` and verify the site is published from the `main` branch and `/<root>` folder.

## Connect `ddbfarms.com`

1. Confirm the `CNAME` file contains exactly:
   ```
ddbfarms.com
```
2. In your domain registrar, set DNS records:
   - `A` record for `@` to GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` to `sidetech311-hash.github.io.`
3. GitHub Pages should provision HTTPS automatically after DNS updates.

## Deploy to Netlify

1. Sign in to Netlify.
2. Create a new site from Git by connecting your GitHub repository.
3. Set the publish directory to `/`.
4. Deploy.

## Contact form setup

The contact form uses Formsubmit.co and is configured to send messages to `info@ddbfarms.com`.
If you want to use a different email or a custom Formsubmit endpoint, update the `action` attribute in `contact.html`.

## Notes

- The site is ready to host as a static website.
- Replace placeholder images and text with real farm photos and details.
- Add a custom domain if desired.
