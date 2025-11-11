import * as React from "react";
import { JSX } from "react/jsx-runtime";
const SVGComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    width={10}
    height={11}
    viewBox="0 0 10 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 4.46558C9.66667 4.85048 9.66667 5.81273 9 6.19763L1.5 10.5278C0.833333 10.9127 0 10.4315 0 9.66173V1.00148C0 0.231676 0.833333 -0.249449 1.5 0.135451L9 4.46558Z"
      fill="#028621"
      fillOpacity={0.7}
    />
  </svg>
);
export default SVGComponent;
