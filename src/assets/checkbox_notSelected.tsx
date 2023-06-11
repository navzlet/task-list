import * as React from "react"
import { SVGProps } from "react"
const Checkbox_notSelected = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <rect width={14} height={14} x={1} y={1} fill="#fff" rx={1} />
    <rect
      width={14}
      height={14}
      x={1}
      y={1}
      fill="#fff"
      stroke="#D9D9D9"
      strokeWidth={2}
      rx={1}
    />
    <rect
      width={14}
      height={14}
      x={1}
      y={1}
      stroke="#D9D9D9"
      strokeWidth={2}
      rx={1}
    />
  </svg>
)
export default Checkbox_notSelected
