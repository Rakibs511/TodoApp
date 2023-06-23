import React from "react";
type PropType = {
  name: string;
  onClick:React.MouseEventHandler<HTMLButtonElement>
};

const Button = ({ name , onClick}: PropType) => {
  return (
    <button className="w-fit h-full hover:bg-primary-500 active:bg-primary-900 text-secondery-500 p-3"
    onClick={onClick}
    >
      {name}
      
    </button>
  );
};

export default Button;
