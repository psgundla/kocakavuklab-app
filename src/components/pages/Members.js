import PageHeader from "../common/PageHeader";
import GoToTopButton from "../common/GoToTopButton";
import MemberCard from "../members/MemberCard";
import MemberGroup from "../members/MemberGroup";
import { principalInvestigator, memberGroups } from "../../data/membersData";

function Members() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center text-center">
      <PageHeader title="Our Team" />

      <div className="flex flex-col items-center justify-center w-full mt-16 mb-14">
        <MemberCard member={principalInvestigator} />
      </div>

      <div className="w-full max-w-7xl">
        {memberGroups.map((group) => (
          <MemberGroup key={group.id} group={group} />
        ))}
      </div>

      <GoToTopButton />
    </div>
  );
}

export default Members;
