# Pull Requests and Issues

Use issues to describe the requested website change and pull requests to review
the implementation before it reaches the public site.

## Opening an issue

Choose a short title such as `Add new PhD student` or `Publish postdoc vacancy`.
Include:

- page or content group affected;
- exact text and links;
- image/logo attachment and permission to publish it;
- requested publication date;
- person who should confirm scientific or personal information.

Do not include private contact details unless they are intended for the public
website.

## Creating a branch

Start from the current `main` branch and use one focused branch:

```bash
git switch main
git pull
git switch -c content/short-description
```

Use `content/` for routine data updates and `feature/` or `fix/` for component
or behavior changes.

## Preparing a pull request

Before committing:

```bash
npm install
npm test -- --watchAll=false
npm run build
```

Commit only files related to the issue. A routine content pull request should
normally touch:

- one file in `src/data/`;
- optionally one image in `src/assets/`.

The pull request description should state:

- what changed;
- which page is affected;
- whether the content owner verified names, roles, links, and spelling;
- test/build results;
- the linked issue, using `Closes #<issue-number>` when appropriate.

## Review checklist

- [ ] The record is in the correct fixed group.
- [ ] The `id` is unique and stable.
- [ ] Links open the intended public destination.
- [ ] Images are optimized and have a meaningful filename.
- [ ] No layout component was edited for a content-only change.
- [ ] Mobile and desktop layouts were checked.
- [ ] Tests and the production build pass.
- [ ] Personal information is approved for publication.

Merge only after review. Cloudflare deployment details are documented in
`docs/CLOUDFLARE_DEPLOYMENT.md`.
