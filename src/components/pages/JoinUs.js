import PageHeader from "../common/PageHeader";
import GoToTopButton from "../common/GoToTopButton";
import JobCategory from "../jobs/JobCategory";
import { jobGroups } from "../../data/jobsData";

const JoinUs = () => (
  <div className="join-us-container flex flex-col items-center justify-center min-h-screen bg-gray-50">
    <section className="w-full max-w-7xl py-16 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <PageHeader title="Join Our Research Team" subtitle="" />
          <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
            We are constantly looking for highly motivated <strong>MD-</strong>,
            <strong>PhD-</strong>, and <strong>Post-Doctoral</strong> candidates.
            If you are interested in working in a dynamic and well-funded research
            team with a strong translational background and close interactions with
            clinical teams, contact{" "}
            <a
              href="mailto:kocakavuklab@gmail.com"
              className="text-cyan-500 hover:underline"
            >
              Emre Kocakavuk, MD, PhD
            </a>.
          </p>
          <a
            href="#available-positions"
            className="mt-6 px-8 py-3 text-lg font-semibold text-white bg-cyan-600 hover:bg-cyan-700 rounded-lg shadow-lg transition"
          >
            View positions →
          </a>
        </div>

        <div className="flex justify-center">
          <img
            src="hiring.jpg"
            alt="Research team working together"
            className="w-full max-w-md md:max-w-lg h-auto rounded-xl shadow-xl object-cover"
          />
        </div>
      </div>
    </section>

    <section id="available-positions" className="w-full max-w-7xl px-6 pb-16 scroll-mt-24">
      <PageHeader title="Available Positions" />
      <div className="mt-10 space-y-12">
        {jobGroups.map((group) => (
          <JobCategory key={group.id} group={group} />
        ))}
      </div>
    </section>

    <GoToTopButton />
  </div>
);

export default JoinUs;
