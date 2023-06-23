"use client";
import React, { Dispatch, MouseEvent, SetStateAction, useEffect, useRef, useState } from "react";
import Button from "./Button";
type PropType = {
  id: string;
  todo: string;
  isComplete: boolean;
  completeHandle: any;
  editHandle?: any;
  deleteHandle?: any;
  editedValue?:Dispatch<SetStateAction<string>>
};

const TodoListItem = ({
  id,
  todo,
  completeHandle,
  editHandle,
  deleteHandle,
  isComplete,
  editedValue
}: PropType) => {
  const [todoIsComplete, setTodoIsComplete] = useState<boolean>(isComplete);
  const [isEditAble, setIsEditAble] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);

//   useRef only use for focus input box when click edit
  const todoRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    isEditAble ? todoRef.current?.focus() : null;
  }, [isEditAble]);

  return (
    <div className="flex w-full h-fit mt-5 ">
      <div className="flex h-12 w-9/12">
        <input
          type="checkbox"
          className="m-2"
          checked={todoIsComplete?true:false}
          onChange={(e) => {
            setTodoIsComplete(e.target.checked);
            completeHandle(id);
          }}
        />
        {!todoIsComplete ? (
          <input
            ref={todoRef}
            type="text"
            readOnly={isEditAble ? false : true}
            className={`rounded h-full ${
              isEditAble ? "focus: outline-secondery-300" : "focus:outline-none"
            } p-2 text-xl w-full ${
              isEditAble || todoIsComplete
                ? "text-secondery-500"
                : "text-secondery-900"
            }`}
            onChange={(e)=>{
                editedValue?editedValue(e.target.value):null
            }}
            defaultValue={todo}
          />
        ) : (
          <s className={`p-2 text-xl w-full text-secondery-500`}>{todo}</s>
        )}
      </div>

      <div className="flex flex-col justify-center items-center">
        <Button
          name={isEditAble && !todoIsComplete ? "Done" : "Edit"}
          onClick={() => {
            isEditAble ? setIsEditAble(false) : setIsEditAble(true);
            isEditAble ? editHandle(id) : null;
          }}
        />
        <Button
          name="Delete"
          onClick={() => {
            isDelete ? setIsDelete(false) : setIsDelete(true);
            deleteHandle(id);
          }}
        />
      </div>
    </div>
  );
};

export default TodoListItem;
