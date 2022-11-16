import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  additionalClass?: string;
};

export const ButtonPrimary = ({
  children,
  type = 'button',
  additionalClass = '',
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 ${additionalClass}`}
    >
      {children}
    </button>
  );
};
