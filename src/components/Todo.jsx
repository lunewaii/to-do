import React from 'react';

//{todo} é o mesmo que props.todo
//o mesmo que props.todo.text, props.todo.category, props.todo.isCompleted
const Todo = ({todo}) => {
  return (
    <div className="todo">
            <div className="content">
              <p>{todo.text}</p>
              <div className="category"><p>({todo.category})</p></div>
            </div>
            <div>
              <button className='complete'>Completar</button>
              <button className='remove'>X</button>
            </div>
          </div>
  );
}

export default Todo;
