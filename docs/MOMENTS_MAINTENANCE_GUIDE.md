# Moments Maintenance

The Moments page layout lives in `src/components/pages/Moments.js`. Routine
updates should only change `src/data/momentsData.js` and image files under
`src/assets/moments/`.

## Add a photo event

1. Create `src/assets/moments/` if it does not exist.
2. Add optimized JPG or WebP images with meaningful filenames.
3. Import each image at the top of `src/data/momentsData.js`.
4. Add the event to the appropriate year in `momentsTimeline`.

```js
{
  id: "lab-retreat-2026",
  date: "June 2026",
  title: "Lab Retreat",
  description: "Optional short description.",
  photos: [
    {
      id: "lab-retreat-group-photo",
      src: retreatGroupImg,
      alt: "Kocakavuk Lab members at the 2026 lab retreat"
    }
  ]
}
```

Every year, event, and photo must have a unique stable `id`. Alt text should
describe what is visible rather than repeating the event title. Add new years
at the beginning of `momentsTimeline` so the newest content appears first.

## Image recommendations

- Prefer WebP or optimized JPG.
- Use images at least 1200 pixels wide.
- Keep individual files below approximately 500 KB where practical.
- Remove embedded location metadata when it is not intended for publication.
- Confirm consent before publishing identifiable people.

Before opening a pull request, run:

```bash
npm test -- --watchAll=false
npm run build
```
