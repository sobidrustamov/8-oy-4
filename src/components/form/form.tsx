"use client";
import { postTodos } from "@/service/todos";
import React from "react";
import { useForm } from "react-hook-form";

export interface CreateTodoType {
  title: string;
  description: string;
}

export const Form: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<CreateTodoType>();
  const createTodo = (data: CreateTodoType) => {
    postTodos(data);
  };
  return (
    <form
      className="w-1/2 m-auto p-3 flex flex-col gap-2 justify-between "
      onSubmit={handleSubmit(createTodo)}
    >
      <h2 className="text-2xl font-medium text-center">Todo Form</h2>
      <div>
        <input
          className="border border-blue-400 p-2 w-full"
          type="text"
          placeholder="Title"
          {...register("title",{required:true})}
        />
      </div>
      <div>
        <input
          className="border border-blue-400 p-2 w-full"
          type="text"
          placeholder="Description"
          {...register("description",{required:true})}
        />
      </div>
      <div className="text-center">
        <button className="px-5 py-2 bg-blue-400" type="submit">
          send
        </button>
      </div>
    </form>
  );
};
