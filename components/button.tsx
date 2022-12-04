import React from "react";

type Props = { text: string, onClick?: React.MouseEventHandler<HTMLButtonElement>, className?: string };

const Button = ({ text, onClick, className }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={"focus:outline-none text-white bg-gradient-to-r from-purple-500 to-pink-500  hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 my-6 w-48 h-16 " + (className || '')}>{text}</button>
  );
};

export default Button;