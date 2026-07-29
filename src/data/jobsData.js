const phdPositions = [];

const postdocPositions = [
  {
    id: "postdoc-2025",
    title: "Postdoctoral Research Position",
    description: "Applications for a postdoctoral research position in the lab.",
    status: "Closed",
    applyLink: "https://karriere.ume.de/job-finder/?get_job=12180"
  }
];

const minijobPositions = [
  {
    id: "technical-assistant-2025",
    title: "Technical Assistant Position",
    description: "A technical assistant position supporting the lab’s research activities.",
    status: "Closed",
    applyLink: "https://karriere.ume.de/job-finder/?get_job=12335"
  }
];

// Keep these three groups in this order. Add vacancies only to the matching array.
export const jobGroups = [
  { id: "phd", title: "PhD Student Positions", jobs: phdPositions },
  { id: "postdoc", title: "Postdoctoral Positions", jobs: postdocPositions },
  { id: "minijob", title: "Minijob Positions", jobs: minijobPositions }
];
