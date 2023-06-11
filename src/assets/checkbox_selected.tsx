import * as React from "react";
import { SVGProps } from "react";
const Checkbox_selected = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <rect width={16} height={16} fill="#fff" rx={2} />
    <rect
      width={15}
      height={15}
      x={0.5}
      y={0.5}
      fill="#4788F6"
      stroke="#4788F6"
      rx={0.5}
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M6.142 9.663 4.184 7.901a.96.96 0 0 0-1.257 0 .745.745 0 0 0 0 1.131l2.667 2.4c.377.34.998.306 1.327-.071l6.222-6.4c.304-.348.237-.85-.15-1.123-.385-.273-.944-.213-1.248.134L6.143 9.663Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Checkbox_selected;
