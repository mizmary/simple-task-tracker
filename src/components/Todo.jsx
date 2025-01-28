import { useRef } from 'react'
import todo_icon from '../assets/todo_icon.svg'
import TodoItems from './TodoItems'

const Todo = ({name, todos, updateTodos}) => {
  const inputRef = useRef()

  const add = () =>{
    const inputText = inputRef.current.value.trim();

    if (inputText === ""){
      return null;
    }
    
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    }
    updateTodos([...todos, newTodo]);
    inputRef.current.value = ""
  }

  const deleteTodo = (id) => {
    updateTodos(todos.filter((todo) => todo.id !== id));
  }

  const toggle = (id) => {
    updateTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  }

  return (
    <div className="bg-white w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
        
        <div className="flex items-center mt-7 gap-2">
            <img src={todo_icon} className='w-8' alt="" />
            <h1 className="text-3xl font-semibold">{name}</h1>
        </div>

        <div className='flex items-center my-7 rounded-full bg-gray-100'>
            <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Добавь свою задачу'/>
            <button onClick={add} className='border-none rounded-full bg-rose-400 w-32 h-14 text-white text-lg font-medium cursor-pointer'>Добавить</button>
        </div>

        <div>
            {todos.map((item, index) => (
          <TodoItems
            key={index}
            text={item.text}
            id={item.id}
            isComplete={item.isComplete}
            deleteTodo={deleteTodo}
            toggle={toggle}
          />
        ))}
        </div>
    </div>
  )
}

export default Todo