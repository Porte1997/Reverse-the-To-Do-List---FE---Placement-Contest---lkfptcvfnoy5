import React, { useState } from 'react'
import '../styles/App.css';

function App() {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    input: '',
    createdAt: '20:30',
  }, {
    id: 'todo2',
    input: '',    
    createdAt: '18:00',
  }
  ]);

function changed(e){
  // console.log(e.target.id);
  if(e.target.id === "todo1"){
    if(todos[0].id === 'todo1'){
      setTodos([
      {
        id: 'todo1',
        input: e.target.value,
        createdAt: '20:30',
      },
      {
        id: 'todo2',
        input: todos[1].input,    
        createdAt: '18:00'
      }
    ])}
    else{
      setTodos([
        {
          id: 'todo2',
          input: todos[0].input,
          createdAt: '18:00'
        },
        {
          id: 'todo1',
          input: e.target.value,    
          createdAt: '20:30',
        }
      ])
    }
  }
  else{
    if(todos[0].id === 'todo2'){
      setTodos([
      {
        id: 'todo2',
        input: e.target.value,
        createdAt: '18:00',
      },
      {
        id: 'todo1',
        input: todos[1].input,    
        createdAt: '20:30'
      }
    ])}
    else{
      setTodos([
        {
          id: 'todo1',
          input: todos[0].input,
          createdAt: '20:30',
        },
        {
          id: 'todo2',
          input: e.target.value,    
          createdAt: '18:00'
        }
      ])
    }
  }
}


function ToDo(item, index) {
  return (<tr key={index}>
    <td>
      <p>{item.id}</p>
    </td>
    <td>
      <input value={item.input} id={item.id} onChange={changed}/>
    </td>
    <td>
      <p>{item.createdAt}</p>
    </td>
  </tr>)
}


  function revToDo(){
    setTodos([todos[1], todos[0]]);
  }

  

  return (
    <div id="main">
      <button onClick={revToDo}>Reverse</button>
      <table>
        <tbody>
          { todos.map((item, index) => ToDo(item, index)) }
        </tbody>
      </table>
    </div>
  )
}


export default App;
