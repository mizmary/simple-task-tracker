import todo_icon from '../assets/todo_icon.svg'

const Todo = () => {
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
        
        <div className="flex items-center mt-7 gap-2">
            <img src={todo_icon} className='w-8' alt="" />
            <h1 className="text-3xl font-semibold">To-Do List</h1>
        </div>

        <div className='flex items-center my-7 rounded-full bg-gray-100'>
            <input className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task'/>
            <button className='border-none rounded-full bg-rose-400 w-32 h-14 text-white text-lg font-medium cursor-pointer'>ADD +</button>
        </div>

        <div>
            
        </div>
    </div>
  )
}

export default Todo