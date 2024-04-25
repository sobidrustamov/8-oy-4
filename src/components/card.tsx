'use client'
import { deleteTodos } from "@/service/todos";
import React from "react";

interface Props {
  title: string;
  description: string;
  id: number;
}

export const Card: React.FC<Props> = ({ title, description, id }) => {
  const deleteTodoItem = (id: number) => {
    deleteTodos(id);
  };
  const editTodoItem = (id: number) => {
    deleteTodos(id);
  };
  return (
    <div className="border p-3 flex justify-between">
      <div>
        <h1 className="text-xl">{id}</h1>
        <h1 className="text-3xl">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="flex flex-col gap-2">
        <button
          onClick={() => deleteTodoItem(id)}
          className="py-2 px-4 bg-red-400 text-white"
        >
          Delete
        </button>
        <button
          onClick={() => editTodoItem(id)}
          className="py-2 px-4 bg-yellow-400 text-white"
        >
          Edit
        </button>
      </div>
    </div>
  );
};
