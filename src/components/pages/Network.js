import "../../App.css";
import PageHeader from "../common/PageHeader";
import GoToTopButton from "../common/GoToTopButton";
import NetworkGroup from "../network/NetworkGroup";
import { networkGroups } from "../../data/networkData";

const Network = () => (
  <div className="min-h-screen bg-gray-50 w-full py-6 relative flex flex-col items-center">
    <div className="relative networks-div mb-6">
      <PageHeader title="Our Network" />
    </div>

    {networkGroups.map((group, index) => (
      <NetworkGroup key={group.id} group={group} isFirst={index === 0} />
    ))}

    <GoToTopButton />
  </div>
);

export default Network;
