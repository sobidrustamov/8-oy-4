import { Card } from "@/components/card";
import { Form } from "@/components/form/form";
import { getTodos } from "@/service/todos";
import Image from "next/image";

export default async function Home() {
  const data = await getTodos();
  return (
    <main>
      <div className="container">
        <Form />
        {data?.map((todo) => (
          <Card key={todo.id} {...todo} />
        ))}
      </div>
    </main>
  );
}
