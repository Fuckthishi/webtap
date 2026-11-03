# WEBTAP — Video Editing Agency

WEBTAP’s black-and-white website with subtle blue accents, responsive layouts, scroll-driven animation, an interactive YouTube portfolio, founder profile, email project briefs, and embedded Calendly booking.

## Website files

- `index.html` — page content, navigation, project brief and booking dialogs
- `style.css` — responsive design, blue accents and animation
- `app.js` — scroll interaction, motion controls and email brief
- `booking.js` — lazy-loaded Calendly integration

- `showcase.js` — video selection, swipeable cards and YouTube playback
- `assets/hasan-saleh.webp` — optimized 288 × 360 profile portrait (under 4 KB), loaded eagerly

## Run locally

Requires Node.js 18 or newer. There are no package dependencies.

```sh
npm run dev
```

Open `http://localhost:5173`. Use `npm run dev -- --port 8080` to select another port.

## Build and host

```sh
npm run check
npm run build
npm run preview
```

Deploy the generated `dist/` folder to a static host. Build command: `npm run build`. Output directory: `dist`. The website files and `assets/` folder can also be hosted directly without a build. The previous TanStack application has been replaced by this static website.

## Contact and booking

- Email: `webtap.site@gmail.com`
- Calendly: `https://calendly.com/hassansalehh753/30min`

Calendly loads only after a visitor opens the booking dialog. The project brief opens an email draft; it does not send messages automatically. Fonts load from Google Fonts with system fallbacks.

The ChatGPT Sites deployment is managed separately; pushing to this repository does not automatically update it. Existing repository history remains available in Git.
