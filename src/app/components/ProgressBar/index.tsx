import { FC } from "react";

interface ProgressProps {
  strokeWidth: number;
  sqSize: number;
  percentage?: number;
}

const ProgressBar: FC<ProgressProps> = ({
  strokeWidth,
  sqSize,
  percentage
}) => {
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * (percentage || 0)) / 100;
  return (
    <svg
      width={sqSize}
      height={sqSize}
      viewBox={viewBox}
      className="block my-0 mx-auto fill-none"
    >
      <circle
        className="fill-none stroke-slate-300 "
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className=" stroke-[#713fff] stroke-linecap-round transition duration-500 ease-in-out"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset
        }}
      />
    </svg>
  );
};
export default ProgressBar;
