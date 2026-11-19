# scripts/

## `og-image.html`

Source of the social preview image `images/og-image.jpg` (1200x630), used by
`_includes/seo.html` for Open Graph / Twitter cards. It uses the site palette
and the EB Garamond / Source Sans 3 fonts (loaded from Google Fonts).

To regenerate it after editing the HTML, take a 1200x630 screenshot with
headless Chrome:

```
chrome --headless=new --hide-scrollbars --window-size=1200,630 \
  --virtual-time-budget=8000 --screenshot=og.png \
  scripts/og-image.html
```

then convert it to a light JPEG (keep it well under 300 KB, or WhatsApp shows
only a small thumbnail):

```
python -c "from PIL import Image; Image.open('og.png').convert('RGB').save('images/og-image.jpg', quality=85, optimize=True)"
```

This folder is excluded from the Jekyll build.
