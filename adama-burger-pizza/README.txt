ADAMA BURGER AND PIZZA — Website Prototype
============================================

FOLDER STRUCTURE
----------------
index.html            Main page markup
css/style.css         All styles, colors, layout, responsive rules
js/script.js          Menu data, reviews, language text, and page behavior
images/assets/        Background images used by the site

HOW TO REPLACE THE BACKGROUND IMAGES
-------------------------------------
There are exactly two background images, each controlled by ONE line
in css/style.css (near the top, inside :root):

  --hero-bg-image: url('../images/assets/hero-bg.jpg');
  --section-bg-image: url('../images/assets/section-bg.jpg');

To change the visuals of the whole site:
1. Add your new photo to images/assets/
2. Either rename it to match the existing filename (hero-bg.jpg or
   section-bg.jpg) and replace the file directly, OR
3. Update the path inside the quotes in style.css to point to your
   new filename.

That's it — every section that uses --section-bg-image will update
automatically, since they all reference the same variable rather than
having the image hard-coded in multiple places.

Currently these two files are placeholder abstract gradients (dark
green/charcoal with a soft warm glow) since real photography wasn't
available to source automatically in this environment. Swap in real
food photography whenever you're ready.

WHAT'S ALREADY WORKING
-----------------------
- Sticky header with a slide-out hamburger menu (top right)
- Language switch: English / Amharic / Oromiffa (translates nav, menu,
  reviews, and key sections)
- Login and Create Account (separate tabs in one modal)
- Popular Items, Special Offer, Menu, Reviews (with a working review
  form — no login required to post), and a Visit Us section
  (address / hours / contact)
- A floating "Order Now" button
- Fully responsive: mobile, tablet, and desktop breakpoints

OPENING THE SITE
-----------------
Just open index.html in any browser — no build step or server needed.
