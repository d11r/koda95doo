import ReactTooltip from 'react-tooltip';

const InputLabel = (props: {
  for: string;
  label: string;
  tooltip?: string;
}) => (
  <label
    className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex items-center"
    htmlFor={props.for}
  >
    {props.label}
    {props.tooltip && (
      <div data-tip={props.tooltip} className="normal-case cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1 pb-0.5 inline"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    )}
    <ReactTooltip effect="float" className="normal-case" />
  </label>
);

export { InputLabel };
