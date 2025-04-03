import { useEffect, useState } from 'react'

import "./App.css";

import Todo from './components/Todo.jsx';
import TodoForm from './components/TodoForm.jsx';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'terminar to-do list',
      category: 'Trabalho',
      isCompleted: false
    },
    {
      id: 2,
      text: 'ir para a academia',
      category: 'Pessoal',
      isCompleted: false
    },
    {
      id: 3,
      text: 'fazer lição de inglês',
      category: 'Estudos',
      isCompleted: false
    }
  ])

  return (
    //no react, precisa ter uma div que apareça todo mundo, ou não funciona!
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {/* sempre que for usar um codigo js, vai entre {} */}
        {todos.map((todo) => ( //esse objeto é acessado com (), diferente do javascript
          <Todo todo={todo} />//chama o componente todo, e passa o objeto todo como props
        ))}
      </div>
      <TodoForm/>
    </div>
  )
}

export default App
