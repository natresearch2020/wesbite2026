# National Research Consultancy — GitHub Pages website

A static, responsive four-page website with no backend or build step.

## Files
- `index.html` — Home
- `about.html` — About Us
- `services.html` — Services
- `contact.html` — embedded Google enquiry form
- `assets/css/style.css` — responsive styling
- `assets/js/main.js` — mobile menu and footer year
- `assets/images/` — existing NRC logo and icon
- `assets/downloads/NRC-Company-Flyer.pdf` — three-page flyer (pages 1–2 without email; revised page 3)

## Deploy to GitHub Pages
1. Create a new GitHub repository, for example `nrc-website`.
2. Upload **the contents of this folder** to the repository root (not the enclosing folder).
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then save.
6. Visit `https://YOUR-USERNAME.github.io/nrc-website/` after deployment finishes.
7. Test all navigation links, flyer download, mobile menu, and Google Form submission.

## Google Forms / Sheets
The contact page embeds the form URL provided by the website owner. To store responses in a spreadsheet, open the Google Form → **Responses** → **Link to Sheets**. Check that the form is published and accepts responses from the intended audience. If access is restricted, visitors may see a Google sign-in or permission prompt.

## Notes
- No Request a Quote page or quotation form is included.
- Contact email: `natresearch.ind@gmail.com`.
- No email address appears in the first two pages of the included flyer; page 3 retains the requested email.
- This is a static website. Email and WhatsApp links open the visitor's respective apps.
- The site uses relative paths and works from a GitHub Pages project repository.
- To update contact details, edit the HTML pages and re-upload the files.
- The embedded Google Form is third-party content; Google handles form submissions and data storage.
