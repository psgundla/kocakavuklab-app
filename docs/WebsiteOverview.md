# Kocakavuk Lab Website

The public website of the Kocakavuk Lab for Computational Oncology at the West
German Cancer Center and University Hospital Essen.

## Quick start

Requirements: Node.js 18 or newer and npm.

```bash
npm install
npm start
```

Run the production check before opening a pull request:

```bash
npm test -- --watchAll=false
npm run build
```

## Updating website content

Routine updates should not require editing page layout files.

| Content | Edit this file | Assets |
|---|---|---|
| News | `src/data/newsData.js` | `src/assets/news/` |
| Members | `src/data/membersData.js` | `src/assets/members/` |
| Network and funding | `src/data/networkData.js` | `src/assets/logos/` |
| Job postings | `src/data/jobsData.js` | No asset required |

Add records inside the existing groups. Do not reorder or rename group IDs unless
the page design itself is intentionally changing.

## Project structure

```text
src/
├── assets/              Images and logos
├── components/
│   ├── common/          Shared site components
│   ├── jobs/            Job category and card layouts
│   ├── members/         Member group and profile layouts
│   ├── network/         Network/funding group layout
│   └── pages/           Route-level page composition
└── data/                Content edited during routine updates
```

Detailed maintenance instructions:

- [Component layout](COMPONENT_LAYOUT_README.md)
- [Pull requests and issues](PULL_REQUEST_AND_ISSUE_README.md)
- [News maintenance](NEWS_MAINTENANCE_GUIDE.md)
- [Cloudflare deployment](CLOUDFLARE_DEPLOYMENT.md)

## Website

- Website: [kocakavuklab.com](https://kocakavuklab.com/)
- Bluesky: [@ekocakavuk](https://bsky.app/profile/ekocakavuk.bsky.social)
- Email: [kocakavuklab@gmail.com](mailto:kocakavuklab@gmail.com)

Maintained by [Pranav](https://biocoderr.github.io) and
[Mahsa](https://github.com/MahsasadatNezamabadi).
