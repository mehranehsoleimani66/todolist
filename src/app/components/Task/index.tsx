import { taskList } from "@/app/siteData/taskList";

import Button from "../Button";
import { TaskCard } from "../taskcard";

const Task = () => {
  return (
    <div className="w-[720px] m-auto py-0 px-[15] max-w-full">
      <div className="my-[50px] mx-0">
        <div className="flex justify-between items-center">
          <span className="font-bold text-[36px] color-[#0a1629]">
            Task List
          </span>
          <Button title="add Task" />
        </div>
        <div className="mt-[40px] ">
          {taskList.map((task) => {
            return <TaskCard key={task.id} task={task} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Task;
