# ONINO staging

Static replica of https://oninopizza.com, captured September 24, 2026.

Open `index.html` through a static web server. No build or dependencies required.
GitHub Pages publishes the root of `main`. All local asset URLs are relative to support project Pages hosting.

Original logos, CSS and page copy are preserved. The Rails signup flow is replaced with an accessible client-side popup. The staging form never stores or submits personal data and clearly labels this behavior. Google Fonts remains an external font dependency. Search indexing is discouraged with a robots meta tag.

To publish changes, commit and push to `main`.
