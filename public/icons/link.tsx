import * as React from "react";
import { SVGProps } from "react";
export const LinkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.fontSize ?? "1em"}
    height={props.fontSize ?? "1em"}
    fill={props.color ?? "none"}
    stroke="currentColor"
    strokeLinecap="round"
    viewBox="0 0 24 24"
    strokeLinejoin="round"
    strokeWidth={2}
    className="lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right"
    {...props}
  >
    <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6M21 3l-9 9M15 3h6v6" />
  </svg>
);
