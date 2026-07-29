import JobCard from "./JobCard";

const JobCategory = ({ group }) => (
  <section aria-labelledby={`job-group-${group.id}`}>
    <h2 id={`job-group-${group.id}`} className="text-2xl font-semibold text-gray-900 mb-5">
      {group.title}
    </h2>
    {group.jobs.length === 0 ? (
      <div className="border border-dashed border-gray-300 rounded-lg p-6 bg-white text-gray-500">
        No positions are currently listed in this category.
      </div>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {group.jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    )}
  </section>
);

export default JobCategory;
