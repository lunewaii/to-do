import { useEffect, useState } from 'react'

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
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => ( //esse objeto é acessado com (), diferente do javascript
          <div className="todo">
            <div className="content">
              <p>{todo.text}</p>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
