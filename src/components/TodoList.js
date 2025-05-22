import Todo from './Todo';

const TodoList = ({ todos, deleteTodo }) => {
  return(
    <div className="space-y-6">
      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} completed={todo.completed} todo_name={todo.todo_name} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;