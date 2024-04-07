import { FillColor } from "../types";

export const ExpandIcon = () => {
  return (
    <svg
      fill="#788896"
      version="1.1"
      viewBox="0 0 94.49 94.49"
      width={14}
      height={14}
    >
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <g>
          <path d="M92.49,35.284H59.206V2c0-1.104-0.896-2-2-2H37.284c-1.104,0-2,0.896-2,2v33.284H2c-1.104,0-2,0.896-2,2v19.922 c0,1.104,0.896,2,2,2h33.284V92.49c0,1.104,0.896,2,2,2h19.922c1.104,0,2-0.896,2-2V59.206H92.49c1.104,0,2-0.896,2-2V37.284 C94.49,36.18,93.596,35.284,92.49,35.284z"></path>
        </g>
      </g>
    </svg>
  );
};

export const RetractIcon = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#788896"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l14 0" />
    </svg>
  );
};

export const CoffeIcon = ({ fillColor }: FillColor) => {
  return (
    <svg fill={fillColor} viewBox="0 0 24 24" width={30} height={30}>
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <path d="M5 2h2v3H5zm4 0h2v3H9zm4 0h2v3h-2zm6 7h-2V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3h2c1.103 0 2-.897 2-2v-5c0-1.103-.897-2-2-2zm-2 7v-5h2l.002 5H17z"></path>
      </g>
    </svg>
  );
};
