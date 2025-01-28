import delete_icon from '../assets/delete_icon.svg'
import check_box from '../assets/check_box.svg'
import check_box_blank from '../assets/check_box_blank.svg'

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className="flex items-center items my-3 gap-2">
        
        <div onClick={() => {toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img src={isComplete ? check_box : check_box_blank}  alt="" className='w-7'/>
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>{text}</p>
        </div>

        <img src={delete_icon} onClick={()=>{deleteTodo(id)}} alt="" className='w-3.5 cursor-pointer'/>
    </div>
  )
}

export default TodoItems