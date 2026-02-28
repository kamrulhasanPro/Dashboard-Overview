import { MdRocketLaunch } from "react-icons/md";
import { BsPuzzleFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const categoryConfig = {
  subscription: {
    icon: <MdRocketLaunch size={16} />,
    bg: "#dcfce7",
    color: "#1a7a4a",
  },
  addon: {
    icon: <BsPuzzleFill size={16} />,
    bg: "#fef9c3",
    color: "#f5a623",
  },
  default: {
    icon: <AiFillStar size={16} />,
    bg: "#e0f2fe",
    color: "#3b82f6",
  },
};

const ProjectItem = ({ product }) => {
  const config = categoryConfig[product.category] ?? categoryConfig.default;

  return (
    <div className="flex items-center gap-3">
      {/* icon circle */}
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: config.bg, color: config.color }}
      >
        {config.icon}
      </div>

      {/* text */}
      <div className="flex flex-col">
        <p className="text-sm font-medium text-neutral">{product.name}</p>
        <p className="text-xs text-base-content/40">
          ${product.price} · {product.sales} sales
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
