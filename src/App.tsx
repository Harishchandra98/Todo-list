import { useState } from 'react'
import './App.css'

function App() {
  const [todoList, setTodoList] = useState<{id:number|null, checked: boolean, todo:string}[]>([]);
  const [row, setRow] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>("");
  const [editRow, setEditRow] = useState<number|null>(null)

  return <div className='todo-view'>
      <h1>Todo App</h1>
      <button className='add-button'
        onClick={() => {
          setVisible(true);
          console.log(todoList);
        }}
      > + Add Todo</button> 
      {visible && <div className='new-todo'>
          <input 
            placeholder='Type your todo here.....' 
            onChange={(e)=>setNewTodo(e.target.value)}
            value={newTodo}
          />
          <button
            onClick={()=>{
              if (newTodo) {
                setRow(row+1)
                setTodoList([...todoList, {id: row, todo:newTodo, checked:false}])
                setVisible(false)
                console.log(todoList);
                setNewTodo("");
              }
              else {
                return <p>Please enter a todo</p>
              }
            }}
          >
            Save
          </button>
          <button
            onClick={()=>{
              setNewTodo("");
              setVisible(false)
            }}
          >Cancel</button>
        </div>}
      {todoList.map((item, index) =>
        editRow === index ? <div className='new-todo'>
        <input 
          onChange={(e)=>setNewTodo(e.target.value)}
          defaultValue={item.todo}
          value={newTodo}
        />
        <button
          onClick={()=>{
            if (newTodo) {
              setRow(row+1)
              setTodoList([...todoList, {id: row, todo:newTodo, checked:false}])
              setVisible(false)
              console.log(todoList);
              setNewTodo("");
            }
            else {
              return <p>Please enter a todo</p>
            }
          }}
        >
          Save
        </button>
        <button
          onClick={()=>{
            setNewTodo("");
            setVisible(false)
          }}
        >Cancel</button>
      </div>
        : 
        <div className='todo-list'>
          <input type='checkbox' />
          <p>{item.todo}</p>
          <button
            onClick={() => {setEditRow(index)}}
          >Edit</button>
          <button
            onClick={()=> {

            }}
          >Delete</button>
        </div>
      )}
    </div>
}

export default App
