import { BsCameraVideo, BsCameraVideoFill } from "react-icons/bs";
import Button from "../Shared/Button";

const ReminderCard = () => {
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col gap-3 h-full">
      {/* label */}
      <p className="text-sm font-medium">Reminder</p>
      {/* meeting title */}
      <h3 className="text-lg text-primary font-semibold grow">
        Meeting With Arc Company
      </h3>
      {/* time */}
      <p className="text-sm text-base-content/50 ">
        Time : {new Date().toLocaleDateString()}
      </p>
      {/* button */}
      <div>
        <Button
          className={"w-full justify-center text-nowrap"}
          label={"Start Meeting"}
          icon={<BsCameraVideoFill />}
        />
      </div>
    </div>
  );
};

export default ReminderCard;
