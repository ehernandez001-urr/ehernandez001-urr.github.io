# scripts/

## `og-image.html`

Source of the social preview image `images/og-image.png` (1200x630), used by
`_includes/seo.html` for Open Graph / Twitter cards. It uses the site palette
and the EB Garamond / Source Sans 3 fonts (loaded from Google Fonts).

To regenerate it after editing the HTML, take a 1200x630 screenshot with
headless Chrome:

```
chrome --headless=new --hide-scrollbars --window-size=1200,630 \
  --virtual-time-budget=8000 --screenshot=images/og-image.png \
  scripts/og-image.html
```

This folder is excluded from the Jekyll build.
