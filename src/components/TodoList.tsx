import { useAppSelector } from "@store/index";
import { remove } from "@store/toDo";
import { useDispatch } from "react-redux";

export function TodoList() {
  const todos = useAppSelector((store) => store.todo);
  const dispatch = useDispatch();

  function handleRemoveTodo(id: string) {
    dispatch(remove(id));
  }

  return (
    <ul className="flex flex-col">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center gap-2">
          <span>{todo.todo}</span>
          <button type="button" onClick={() => handleRemoveTodo(todo.id)}>
            Apagar
          </button>
        </li>
      ))}
    </ul>
  );
}
