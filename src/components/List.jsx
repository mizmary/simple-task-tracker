import { useRef, useState } from 'react'
import delete_icon from '../assets/delete_icon.svg'
import edit_icon from '../assets/edit_icon.svg'
import arrow_right from '../assets/arrow-right.svg'

const List = ({name, id, deleteList, openList, updateListName}) => {
  const [isEditable, setIsEditable] = useState(false)
  const [inputValue, setInputValue] = useState(name)
  const [error, setError] = useState()
  const inputRef = useRef()

  const toggleEditingListName = () => {
    setIsEditable((prev => !prev))
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.trim() !== "") {
      setError("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      validateInput()
    }
  };

  const validateInput = () => {
    if (inputValue.trim() === "") {
      setError("Название списка не может быть пустым")
      setIsEditable(true)
    } else {
      updateListName(id, inputValue);
      setIsEditable(false)
    }
  }


  return (
    <div className="flex flex-row items-center justify-between p-4 bg-white rounded-md w-full my-3">
        <div className='flex flex-col w-full'>
          <input
            type="text"
            ref={inputRef}
            value={inputValue}
            readOnly={!isEditable}
            onChange={handleChange}
            onBlur={validateInput}
            onKeyDown={handleKeyDown}
            className='h-8 text-lg font-medium mr-3' />
          {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
        </div>
        <div className='flex flex-row items-center'>
          <img src={edit_icon} className='mr-1 cursor-pointer w-[24px] h-[24px]' onClick={toggleEditingListName}/>
          <img src={delete_icon} className='cursor-pointer w-[24px] h-[24px]' onClick={()=>{deleteList(id)}}  />
        </div>
        <img src={arrow_right} className='ml-3 cursor-pointer w-[32px] h-[32px]' onClick={() => openList(id)}/>
    </div>
  )
}

export default List