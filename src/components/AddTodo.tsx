import { add } from "@store/toDo";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

export function AddTodo() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  function handleNewTodo(e: FormEvent) {
    e.preventDefault();

    if (todo) {
      dispatch(add(todo));

      setTodo("");
    }
  }

  return (
    <form onSubmit={handleNewTodo} className="flex items-center gap-4">
      <input
        className="border border-zinc-800"
        type="text"
        placeholder="Nova todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="rounded bg-violet-950 px-4 py-2 text-zinc-50"
        type="submit"
      >
        Adicionar
      </button>
    </form>
  );
}
