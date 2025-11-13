import * as React from "react";
const Tick = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={16} height={16} rx={8} fill="#028621" />
    <path
      d="M6.5 11.25L3.75 8.5L4.75 7.5L6.58263 9.43756L11.26 4.5L12.25 5.5L9.5 8.25L6.5 11.25Z"
      fill="white"
    />
  </svg>
);
export default Tick;
