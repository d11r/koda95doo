import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-lg': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
    'btn-wide': true,
    'btn-info': true,
  });

  return (
    <div className={btnClass}>
      {props.children}{' '}
      <style jsx>
        {`
          .btn-primary {
            @apply text-white bg-primary-500;
          }
          .btn-primary:hover {
            @apply bg-primary-600;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
