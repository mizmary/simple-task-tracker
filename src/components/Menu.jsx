

const Menu = () => {
  return (
    <div className='flex items-center'>
      <div className='flex m-auto justify-around w-3/4'>
        <h1 className='text-4xl font-bold text-white'>Мои списки</h1>
        <button className='border-none rounded-md bg-rose-400 w-48 h-14 text-lg text-white font-medium cursor-pointer'>Добавить список</button>
      </div>
    </div>
  )
}

export default Menu