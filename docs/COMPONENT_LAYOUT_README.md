# Component Layout

This website uses a data-driven component structure. Content records live in
`src/data/`; reusable components control presentation; page components only
assemble sections. This keeps the visual layout stable during routine updates.

## Content flow

```text
src/data/*.js
    ↓
src/components/{members,network,jobs}/*
    ↓
src/components/pages/*
```

## Members

Edit `src/data/membersData.js`.

- `principalInvestigator` controls the featured PI card.
- `memberGroups` fixes the section order.
- Add a person to the `members` array associated with:
  - Postdoctoral Researchers
  - PhD Students
  - Master’s, MD & Bachelor’s Students
  - Alumni

Add the photograph to `src/assets/members/`, import it at the top of the data
file, and give every record a unique, stable `id`. Social-link fields are
optional. Do not edit `MemberCard.js`, `MemberGroup.js`, or `Members.js` for a
routine personnel update.

Example:

```js
{
  id: "first-last",
  name: "First Last, MSc",
  image: firstLastImg,
  role: "PhD Student",
  description: "Short research description.",
  email: "mailto:first.last@uk-essen.de",
  linkedin: "https://www.linkedin.com/in/example"
}
```

## Network and funding

Edit `src/data/networkData.js`.

The `networkGroups` array fixes the two page sections:

1. Collaborations & Network
2. Funding

Add a logo to `src/assets/logos/`, export it from `src/components/LogoName.js`,
import it into the data file, and add the item to the appropriate array. Do not
edit `NetworkGroup.js` or `Network.js` for a routine update.

## Job postings

Edit `src/data/jobsData.js`.

Add each vacancy to one of the three fixed arrays:

1. `phdPositions`
2. `postdocPositions`
3. `minijobPositions`

Allowed status values are `Open` and `Closed`; capitalization matters. Open
positions display the application link. Empty categories remain visible with a
clear empty-state message, so the category layout does not move or disappear.

Example:

```js
{
  id: "phd-spatial-omics-2027",
  title: "PhD Student in Spatial Omics",
  description: "Short description of the project and candidate profile.",
  status: "Open",
  applyLink: "https://example.org/application"
}
```

## When layout code should change

Only edit files below `src/components/` when the visual design or behavior must
change for every record. Content-only pull requests should normally modify one
data file and, if necessary, one new asset.
