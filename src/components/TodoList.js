import Todo from './Todo';

const TodoList = (todos) => {
  return(
    <div className="space-y-6">
      {todos.todos.map((todo) => (
        <Todo key={todo.id} todo_name={todo.todo_name} />
      ))}
    </div>
  );
}

export default TodoList;