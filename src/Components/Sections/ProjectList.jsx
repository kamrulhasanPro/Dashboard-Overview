import { AiOutlinePlus } from "react-icons/ai";
import ProjectItem from "../Cards/ProductItem";
import Button from "../Shared/Button";

const ProjectList = ({ products }) => {
  return (
    <div className="bg-white rounded-2xl p-4 h-full">
      {/* title + New button */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-medium">Projects</p>
        <Button
          className={"!px-2 !py-1"}
          variant="outline"
          icon={<AiOutlinePlus />}
          label="New"
        />
      </div>

      {/* list */}
      <div className="flex flex-col gap-3">
        {products.map((p) => (
          <ProjectItem key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
