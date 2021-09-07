import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 font-bold whitespace-pre-line leading-normal md:leading-hero">
      {props.title}
    </h1>
    <div className="text-xl md:text-2xl mt-4 mb-8">{props.description}</div>

    {props.button}
  </header>
);

export { HeroOneButton };
