const InputLabel = (props: { for: string; label: string }) => (
  <label
    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    htmlFor={props.for}
  >
    {props.label}
  </label>
);

export { InputLabel };
