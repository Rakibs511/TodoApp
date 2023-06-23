"use client";
import { title } from "@/config/const";
import TodoTitle from "./TodoTitle";
import TodoListItem from "./TodoListItem";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoInput from "./TodoInput";

interface Todo {
  id: string;
  todo: string;
  isComplete: boolean;
}

const Todo = () => {
  // inputted task/todo
  const [todoValue, setTodoValue] = useState<string>("");

  const [editedValue, setEditedValue] = useState<string>("");

  //   stored all todo list
  const [todoStore, setTodoStore] = useState<Todo[]>([]);
 
// Save Data in localStorage
  useEffect(() => {
    const stored = localStorage.getItem('storage')
    const test = stored?JSON.parse(stored):null
    test?setTodoStore([...test]):null
  }, []);
  
  useEffect(() => {
    const test = JSON.stringify(todoStore)
    localStorage.setItem('storage',test)
  }, [todoStore]);

  //------------> Add Todo <-----------------------
  const addTaskHandle = () => {
    if (todoValue.length < 1) return alert("Please Enter a todo!");
    setTodoStore((prev: typeof todoStore) => [
      ...todoStore,
      { id: uuidv4(), todo: todoValue, isComplete: false },
    ]);
    setTodoValue("");
  };

  //------------> Completed Todo <-----------------------
  const todoCompleteHandle = (id: string) => {
    setTodoStore(
      todoStore.map((item: Todo) =>
        item.id === id ? { ...item, isComplete: !item.isComplete } : item
      )
    );
  };

  //------------> Edit a Todo <-----------------------
  const TodoEditHandle = (id: string) => {
    setTodoStore(
      todoStore.map((item: Todo) =>
        item.id === id ? { ...item, todo: editedValue } : item
      )
    );
  };

  // ------------->  Delete a todo <-------------------
  const TodoDeleteHandle = (id: string) => {
    setTodoStore(todoStore.filter((item: Todo) => item.id !== id));
  };

  // ========= JSX =============================
  return (
    <section className="flex flex-col bg-primary-100 w-96 h-fit sm:w-8/12 md:w-6/12 rounded-lg mt-5 p-5">
      <h1 className="text-2xl font-semibold text-center">{title.appTitle}</h1>

      {/* Title component */}
      <TodoTitle title="ADD ITEM" />

      {/* NOTE:-------> Todo Input <--------- */}
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        addTaskHandle={addTaskHandle}
      />

      {/* NOTE--------> TODO List <------------*/}

      {/* Title component */}
      <TodoTitle title="TODO" />

      <ul>
        {todoStore.map((item: Todo) =>
          !item.isComplete ? (
            <li key={item.id}>
              <TodoListItem
                id={item.id}
                todo={item.todo}
                isComplete={item.isComplete}
                completeHandle={todoCompleteHandle}
                editHandle={TodoEditHandle}
                deleteHandle={TodoDeleteHandle}
                editedValue={setEditedValue}
              />
              <hr />
            </li>
          ) : null
        )}
      </ul>

      {/* NOTE-------> Completed todo List <-----------*/}

      {/* Title component */}
      <TodoTitle title="COMPLETED" />

      <ul>
        {todoStore.map((item: Todo) =>
          item.isComplete ? (
            <li key={item.id}>
              <TodoListItem
                id={item.id}
                todo={item.todo}
                isComplete={item.isComplete}
                completeHandle={todoCompleteHandle}
                editHandle={TodoEditHandle}
                deleteHandle={TodoDeleteHandle}
              />
              <hr />
            </li>
          ) : null
        )}
      </ul>
    </section>
  );
};

export default Todo;
