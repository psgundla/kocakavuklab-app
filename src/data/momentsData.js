import meritAwardImg from "../assets/news/Merit_Awardees.jpg";
import newMembersImg from "../assets/news/new_members.png";
import labOpeningImg from "../assets/news/opening-doors.png";

/**
 * Moments page content.
 *
 * Add new years at the beginning of this array. Each photo needs a unique id,
 * imported image, and descriptive alt text. The page layout is generated from
 * this data; routine updates should not require editing Moments.js.
 */
export const momentsTimeline = [
  {
    year: 2025,
    events: [
      {
        id: "esmo-merit-award-2025",
        date: "November 2025",
        title: "ESMO AI & Digital Oncology",
        description:
          "Pranav Swaroop Gundla received an ESMO Merit Award in Berlin.",
        photos: [
          {
            id: "esmo-merit-award-team",
            src: meritAwardImg,
            alt: "ESMO Merit Award recipients at the 2025 congress in Berlin"
          }
        ]
      },
      {
        id: "new-members-2025",
        date: "October 2025",
        title: "New Members Joining the Lab",
        description:
          "Welcoming Marco Tembrink, Jiawei Zhou, and Quan Shi to the Kocakavuk Lab.",
        photos: [
          {
            id: "new-members-group-2025",
            src: newMembersImg,
            alt: "New members joining the Kocakavuk Lab in 2025"
          }
        ]
      }
    ]
  },
  {
    year: 2023,
    events: [
      {
        id: "lab-opening-2023",
        date: "July 2023",
        title: "Opening the Kocakavuk Lab",
        description:
          "The beginning of our computational oncology research group at University Hospital Essen.",
        photos: [
          {
            id: "lab-opening",
            src: labOpeningImg,
            alt: "Kocakavuk Lab opening announcement"
          }
        ]
      }
    ]
  }
];
