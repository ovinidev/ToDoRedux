import { TodoList } from "@components/TodoList";
import { AddTodo } from "@components/AddTodo";

export default function App() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex items-start gap-4">
        <TodoList />

        <AddTodo />
      </div>
    </div>
  );
}
