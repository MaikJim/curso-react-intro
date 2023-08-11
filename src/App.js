import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from './Components/TodoList';
import { TodoItem } from './Components/TodoItem';
import { CreateTodoButton } from './Components/CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de Int a React', completed: true },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALALA', completed: false },
];

function App() {
  return (
    <div className="App">
      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => {
          return <TodoItem key={todo.text} text={todo.text}/>
        })}
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export default App;
