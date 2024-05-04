import Image from "next/image";
import ProgressBar from "../ProgressBar";

export const TaskCard = ({ task }: any) => {
  const { id, title, status, priority, progress } = task;

  return (
    <div className="flex justify-between items-center py-[15px] px-[20px] mt-[15px] rounded-[24px] bg-[#ffffff] ">
      <div className="flex flex-col  justify-center items-start w-[100px]">
        <span className=" text-[14px] font-normal mb-7 text-[#91929e] ">
          Task
        </span>
        <span className="font-normal text-[14px] leading-5 text-[#0a1629]">
          {title}
        </span>
      </div>
      <div className="flex flex-col  justify-center items-center w-[100px] ">
        <span className="text-[14px] font-normal mb-7 text-[#91929e]">
          priority
        </span>
        <span
          className={`capitalize font-bold text-[14px] ${
            priority === "high"
              ? "text-[#0ac947]"
              : priority === "low"
                ? "text-[#f73446]"
                : "text-[#ffbd21]"
          }`}
        >
          {priority}
        </span>
      </div>
      <div className="w-[100px] text-center">
        <button className="bg-[#7d859224] rounded-[8px] py-[7px] px-[14px] font-bold text-[#7d8592] text-[12px] outline-none border-0 cursor-pointer">
          {status}
        </button>
      </div>
      <div className="">
        <ProgressBar strokeWidth={2} sqSize={24} percentage={progress} />
      </div>
      <div className="flex items-center justify-between gap-3">
        <Image
          className="icon"
          src="/assets/icons/edit.svg"
          height={24}
          width={24}
          alt="edit icon"
        />
        <Image
          className="icon"
          src="/assets/icons/delete.svg"
          height={24}
          width={24}
          alt="delete icon"
        />
      </div>
      {/* <div className="actions">
        <EditIcon className="mr-20 cp" />
        <DeleteIcon className="cp" />
      </div> */}
    </div>
  );
};
