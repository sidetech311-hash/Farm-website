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

3. If you want automatic GitHub Pages deployment, keep the included workflow in `.github/workflows/pages.yml`.

## Deploy to Netlify

1. Sign in to Netlify.
2. Create a new site from Git by connecting your GitHub repository.
3. Set the publish directory to `/`.
4. Deploy.

## Contact form setup

The contact form currently uses Formsubmit.co. Replace `your-email@example.com` in `contact.html` with your real email address or a custom Formsubmit endpoint.

## Notes

- The site is ready to host as a static website.
- Replace placeholder images and text with real farm photos and details.
- Add a custom domain if desired.
