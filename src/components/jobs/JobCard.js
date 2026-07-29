const JobCard = ({ job }) => {
  const isOpen = job.status === "Open";

  return (
    <article className="border p-5 rounded-lg shadow-md bg-white h-full flex flex-col">
      <h3 className="text-lg font-bold text-gray-800">{job.title}</h3>
      <p className="text-gray-600 mt-2 flex-1">{job.description}</p>
      <p className="text-sm font-semibold mt-4 text-gray-900">
        Status:{" "}
        <span className={`px-2 py-1 rounded-lg text-white ${isOpen ? "bg-green-600" : "bg-red-600"}`}>
          {job.status}
        </span>
      </p>
      {isOpen && job.applyLink && (
        <a
          href={job.applyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 self-start bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition-transform hover:scale-105"
        >
          Apply here →
        </a>
      )}
    </article>
  );
};

export default JobCard;
