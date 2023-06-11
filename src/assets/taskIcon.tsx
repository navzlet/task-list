import * as React from "react";
import { SVGProps } from "react";
const TaskIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#11304E"
      d="M11.092 7.47a.75.75 0 0 1 0 1.06l-4.773 4.773a.75.75 0 1 1-1.06-1.06L9.5 8 5.258 3.757a.75.75 0 0 1 1.06-1.06l4.774 4.773ZM10 7.25h.561v1.5H10v-1.5Z"
    />
  </svg>
);
export default TaskIcon;
