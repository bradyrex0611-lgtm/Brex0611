# S&C Guides — Static Site

This is a simple responsive static website for S&C Guides (predator hunts & bass fishing).

Included files:
- index.html
- style.css
- script.js

Local preview
1. Clone the repo (if you haven't already):
   git clone https://github.com/bradyrex0611-lgtm/Brex0611.git
   cd Brex0611

2. Open index.html in your browser OR run a local static server:
   - Python 3: `python -m http.server 5500` then open http://localhost:5500
   - Node (http-server): `npx http-server -p 5500`

Make the contact form live
- Option A: Use a service like Netlify Forms or Formspree and update the form `action` attribute.
- Option B: Wire to your backend endpoint by setting `form.action` and `method="post"`.

Deploy to GitHub Pages
1. In the repository on GitHub, go to Settings → Pages.
2. Under "Source" choose Branch: `main` and Folder: `/ (root)`, then Save.
3. GitHub will publish the site and show the URL on that page (it may take a minute).

If you want, I can also:
- Add gallery images you provide, or
- Wire the booking form to Netlify Forms or Formspree, or
- Convert this into a Next.js starter and set up Vercel deploys.
