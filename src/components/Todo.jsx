import React from 'react';

//{todo} é o mesmo que props.todo
//o mesmo que props.todo.text, props.todo.category, props.todo.isCompleted
const Todo = ({todo, removeTodo, completeTodo}) => {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? 'line-through' : 'none'}}>
            <div className="content">
              <p>{todo.text}</p>
              <div className="category"><p>({todo.category})</p></div>
            </div>
            <div>
              <button className='complete' onClick={() => completeTodo(todo.id)}>Completar</button>
              <button className='remove' onClick={() => removeTodo(todo.id)}>X</button>
            </div>
          </div>
  );
}

export default Todo;
