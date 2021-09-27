const Spinner = ({ color }: { color?: string }) => (
  <div>
    <div
      style={{ borderTopColor: 'transparent' }}
      className={`${color ? 'w-8 h-8 mt-2 mb-2' : 'w-4 h-4'} border-4 border-${
        color || 'white'
      } border-solid rounded-full animate-spin mr-2`}
    ></div>
  </div>
);

export { Spinner };
