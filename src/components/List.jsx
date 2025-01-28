import { useRef, useState } from 'react'
import delete_icon from '../assets/delete_icon.svg'
import edit_icon from '../assets/edit_icon.svg'

const List = () => {
  const [isEditable, setIsEditable] = useState(true)
  const [inputValue, setInputValue] = useState("Название списка")
  const inputRef = useRef()
  const [error, setError] = useState()

  const toggleEdittingListName = () => {
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
      setIsEditable(false)
    }
  }

  return (
    <div className="flex flex-col p-4 bg-white rounded-md w-[320px]">
      <div className='flex justify-between '>
        <div className='flex flex-col w-full'>
          <input
            type="text"
            ref={inputRef}
            value={inputValue}
            readOnly={!isEditable}
            onChange={handleChange}
            onBlur={validateInput}
            onKeyDown={handleKeyDown}
            className='h-8 text-lg font-medium resize-none mr-3' />
          {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
        </div>
        <img src={edit_icon} alt="" className='mr-1' onClick={toggleEdittingListName} />
        <img src={delete_icon} alt="" />
      </div>
      <p className='mt-2'>Количество элементов: count</p>
    </div>
  )
}

export default List