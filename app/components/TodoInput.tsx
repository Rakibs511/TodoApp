import React, { Dispatch, SetStateAction } from "react";
import Button from "./Button";

type ProfType={
    todoValue:string
    setTodoValue:Dispatch<SetStateAction<string>>
    addTaskHandle:React.MouseEventHandler<HTMLButtonElement>
}

const TodoInput = ({todoValue,setTodoValue,addTaskHandle}:ProfType) => {
  return (
    <div className="flex w-full h-14 mt-5">
      <input
        type="text"
        className="border rounded w-11/12 h-full focus:outline-secondery-300 p-2 text-xl text-secondery-500"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      {/* NOTE ------> add Button */}
      <Button name="Add" onClick={addTaskHandle} />
    </div>
  );
};

export default TodoInput;
