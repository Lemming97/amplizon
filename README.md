# Marcavio — Landing Page

Landing page for Marcavio, a French Amazon agency helping French brands launch and grow on Amazon.fr.

## Project Structure

```
marcavio/
├── index.html       # Main landing page
├── css/
│   └── style.css    # All styles
├── js/
│   ├── main.js      # Scroll animations & interactions
│   └── i18n.js      # Multi-language translations
└── README.md
```

## Setup

No build tools needed. This is a plain HTML/CSS/JS site.

1. Clone the repo
2. Open `index.html` in your browser — that's it.

## Languages

The site supports 4 languages via a dropdown in the top-right corner:
- 🇫🇷 French (default)
- 🇬🇧 English
- 🇸🇪 Swedish
- 🇪🇸 Spanish

The selected language is saved in `localStorage` so it persists across page reloads.

To add a new language, add a new entry to the `translations` object in `js/i18n.js`.

## Customisation Checklist

- [ ] Replace `Marcavio` with your agency name throughout
- [ ] Update `contact@marcavio.fr` with your real email
- [ ] Replace placeholder stats (+147%, -38%) with real client results
- [ ] Replace the testimonial with a real client quote
- [ ] Add your logo or favicon
- [ ] Connect the CTA buttons to a contact form (e.g. Tally, Typeform, or Calendly)

## Tech Stack

- HTML5
- CSS3 (custom properties, CSS Grid, responsive)
- Vanilla JavaScript (IntersectionObserver, i18n, localStorage)
- Google Fonts: Instrument Serif + DM Sans
