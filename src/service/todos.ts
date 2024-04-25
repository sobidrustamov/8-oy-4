"use server";
import { CreateTodoType } from "@/components/form/form";
import { revalidateTag } from "next/cache";
interface TodoData {
  title: string;
  description: string;
  id: number;
}

export const getTodos = async (): Promise<TodoData[]> => {
  try {
    const res = await fetch("http://localhost:3000/todos", {
      next: { tags: ["todos"] },
    });
    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export const postTodos = async (data: CreateTodoType) => {
  try {
    const res = await fetch("http://localhost:3000/todos", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    const response = await res.json();
    revalidateTag("todos");
    return response;
  } catch (error) {
    throw new Error("Failed to post data");
  }
};

export const deleteTodos = async (id: number) => {
  try {
    const res = await fetch(`http://localhost:3000/todos${id}`, {
      method: "DELETE",
    });
    const response = await res.json();
    revalidateTag("todos");
    return response;
  } catch (error) {
    throw new Error("Failed to post data");
  }
};
