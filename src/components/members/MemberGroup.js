import MemberCard from "./MemberCard";

const MemberGroup = ({ group }) => (
  <section className="mb-20" aria-labelledby={`member-group-${group.id}`}>
    <h2 id={`member-group-${group.id}`} className="font-bold text-2xl text-gray-900 mb-8">
      {group.title}
    </h2>

    {group.members.length === 0 ? (
      <p className="text-gray-500">No members currently listed.</p>
    ) : (
      <div
        className={
          group.layout === "list"
            ? "flex flex-col items-center gap-6"
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-12 justify-items-center"
        }
      >
        {group.members.map((member) => (
          <MemberCard key={member.id} member={member} compact={group.layout === "list"} />
        ))}
      </div>
    )}
  </section>
);

export default MemberGroup;
