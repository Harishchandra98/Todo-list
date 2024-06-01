import { useState } from 'react'
import './App.css'

function App() {
  const [todoList, setTodoList] = useState<{id:number|null, checked: boolean, todo:string}[]>([]);
  const [row, setRow] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>("");

  return <>
      <h1>Todo App</h1>
      {visible && <div style={{display: "flex", flexDirection: "row", marginBottom: "10px"}}>
          <input 
            style={{marginRight: "10px", padding: "5px", color: "black", backgroundColor: "white", borderRadius: "5px"}} 
            placeholder='Type your todo here.....' 
            onChange={(e)=>setNewTodo(e.target.value)}
            value={newTodo}
          />
          <button 
            style={{marginRight: "10px"}} 
            onClick={()=>{
              setRow(row+1)
              setTodoList([...todoList, {id: row, todo:newTodo, checked:false}])
              setVisible(false)
              console.log(todoList);
              setNewTodo("");
            }}
          >
            Save
          </button>
          <button 
            style={{marginRight: "10px"}} 
            onClick={()=>{
              setNewTodo("");
              setVisible(false)
            }}
          >Cancel</button>
        </div>}
      {todoList.map((item) =>
        <div style={{display: "flex", flexDirection: "row", marginBottom: "10px"}}>
          <input type='checkbox' />
          <p style={{color: "blue", marginRight: "10px"}}>{item.todo}</p>
          <button style={{marginRight: "10px"}}>Edit</button>
          <button style={{marginRight: "10px"}}>Delete</button>
        </div>)}
      <button 
      style={{marginBottom: "10px"}}
      onClick={() => {
        setVisible(true);
        console.log(todoList);
      }}
    > + Add Todo</button>
      
    </>
}

export default App
