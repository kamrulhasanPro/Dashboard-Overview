import { AiOutlinePlus } from "react-icons/ai";
import Button from "../Shared/Button";
import TeamMemberRow from "../Cards/TeamMembarRow";

const TeamTable = ({ members }) => {
  return (
    <div className="bg-white rounded-2xl p-4">
      {/* title + New button */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-medium">Team Collaboration</p>
        <Button
          className={"!px-2 !py-1"}
          variant="outline"
          icon={<AiOutlinePlus />}
          label="Add Member"
        />
      </div>

      {/* list */}
      <div className="flex flex-col gap-3">
        {members.map((m) => (
          <TeamMemberRow key={m.id} member={m} />
        ))}
      </div>
    </div>
  );
};

export default TeamTable;
