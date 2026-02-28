const statusConfig = {
  active: { bg: "bg-green-100", text: "text-green-700" },
  inactive: { bg: "bg-yellow-100", text: "text-yellow-700" },
  Pending: { bg: "bg-gray-100", text: "text-gray-500" },
};

const TeamMemberRow = ({ member }) => {
  const status = statusConfig[member.status] ?? statusConfig.Pending;
  const avatarColors = [
    "#1a7a4a",
    "#2db36e",
    "#f5a623",
    "#ef4444",
    "#3b82f6",
    "#8b5cf6",
  ];

  const getAvatarColor = (name) => {
    const index = name?.charCodeAt(0) % avatarColors.length;
    return avatarColors[index];
  };

  const getInitial = (name) => name?.charAt(0).toUpperCase() ?? "?";

  return (
    <div className="flex items-center gap-3">
      {/* avatar */}
      <div className="">
        <div
          className="w-9 h-9 rounded-full text-center flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
          style={{ background: getAvatarColor(member.name) }}
        >
          {getInitial(member.name)}
        </div>
      </div>

      {/* name + task */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium">{member.name}</p>
        <p className="text-xs text-base-content/40 truncate">
          Working on {member.task}
        </p>
      </div>

      {/* status badge */}
      <span
        className={`text-xs px-2 py-1 rounded-full font-medium
        ${status.bg} ${status.text}`}
      >
        {member.status}
      </span>
    </div>
  );
};

export default TeamMemberRow;
