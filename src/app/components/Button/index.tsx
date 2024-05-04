// // "use client";

// // import { FC } from "react";

// // interface IProps {
// //   bgColor?: string | undefined;
// //   isDisabled?: boolean;
// //   outline?: boolean;
// //   priority?: "high" | "low" | "medium";
// // }
// // export const Button: FC<IProps> = ({
// //   bgColor,
// //   isDisabled,
// //   outline,
// //   priority
// // }) => {
// //   return (
// //     <button
// //       bgColor={bgColor}
// //       className={`bg-[#7d859224] rounded-[8px] py-[7px] px-[14px] font-bold text-[#7d8592] text-[12px] outline-none border-0  ${
// //         isDisabled ? "cursor-not-allowed" : "cursor-pointer"
// //       } ${
// //         outline
// //           ? "bg-[# #ffffff] border border-[#d8e0f0] shadow-md font-normal text-[#7d8592]"
// //           : ""
// //       } ${priority ? "bg-white" : ""}`}
// //     />
// //   );
// // };
// import { FC } from "react";

// interface IProps {
//   bgColor?: string | undefined;
//   isDisabled?: boolean;
//   outline?: boolean;
//   priority?: "high" | "low" | "medium";
// }

// export const Button: FC<IProps> = ({
//   bgColor,
//   isDisabled,
//   outline,
//   priority
// }) => {
//   return (
//     <button
//       style={{ backgroundColor: bgColor }}
//       className={`rounded-[8px] py-[7px] px-[14px] font-bold text-[12px] outline-none border-0 ${
//         isDisabled ? "cursor-not-allowed" : "cursor-pointer"
//       } ${
//         outline
//           ? "border border-[#d8e0f0] shadow-md font-normal text-[#7d8592]"
//           : ""
//       } ${priority ? "bg-white" : ""}`}
//     />
//   );
// };
"use client";
import Image from "next/image";

type ButtonProps = {
  title: string;
  outline?: boolean;
  disabled?: boolean;
};

const Button = ({ title, outline, disabled }: ButtonProps) => {
  return (
    <button
      className={`${
        outline &&
        "bg-[#ffffff] border-solid border-[#d8e0f0] shadow-md font-normal text-[#7d8592] "
      } bg-[#713fff] rounded-xl px-[10px] py-[10px] outline-none border-none font-normal cursor-pointer text-[16px] text-[#ffffff] ${
        disabled && "bg-gray-500 cursor-not-allowed"
      }`}
    >
      <Image
        src={"/assets/icons/add.svg"}
        alt="Icon"
        width={14}
        height={14}
        className="pr-2"
      />
      {title}
    </button>
  );
};

export default Button;
