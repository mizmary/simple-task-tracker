import { useState, useEffect } from 'react';
import List from './List';
import Todo from './Todo';

const Menu = () => {
  const [lists, setLists] = useState(() => {
    const savedLists = localStorage.getItem('lists');
    return savedLists ? JSON.parse(savedLists) : [];
  });
  const [openedList, setOpenedList] = useState(null);

  const addList = () => {
    const newList = {
      id: Date.now(),
      name: 'Название списка',
      todos: null,
    };
    setLists((prev) => [...prev, newList]);
  };

  const deleteList = (id) => {
    setLists((prevLists) => {
      return prevLists.filter((list) => list.id !== id);
    });
  };

  const openList = (id) => {
    setOpenedList(id);
  };

  const closeList = () => {
    setOpenedList(null);
  };

  const updateListName = (id, newName) => {
    setLists((prevLists) => {
      return prevLists.map((list) => {
        if (list.id === id) {
          return { ...list, name: newName };
        }
        return list;
      });
    });
  };

  const updateTodos = (id, todos) => {
    setLists((prevLists) => {
      return prevLists.map((list) => {
        if (list.id === id) {
          return { ...list, todos }; 
        }
        return list;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists));
  }, [lists]);

  return (
    <div className="flex flex-col items-center w-[80%] h-[80%] overflow-hidden place-self-center">
      <div className="flex flex-row w-full justify-between mb-[40px]">
        <h1 className="text-4xl font-bold text-white">Мои списки</h1>
        <button
          onClick={addList}
          className="border-none rounded-md bg-rose-400 w-48 h-14 text-lg text-white font-medium cursor-pointer"
        >
          Добавить список
        </button>
      </div>

      <div className="flex flex-row w-full h-full overflow-hidden">
        <div className="flex flex-col w-[30%] h-full overflow-y-auto">
          {
            lists.length === 0 ?
            (<p className="text-slate-300 text-xl text-center">Списки отсутствуют. Добавьте новый список!</p>) :
            (lists.map((item, index) => {
              return (
                <List
                  key={index}
                  name={item.name}
                  id={item.id}
                  deleteList={deleteList}
                  openList={openList}
                  updateListName={updateListName}
                />
              );
            }))
          }
        </div>

        <div className="w-[70%] h-full overflow-y-auto">
          {openedList ? (
            <div className="flex flex-col items-center">
              <Todo 
              name={lists.find((list) => list.id === openedList)?.name} 
              todos={lists.find((list) => list.id === openedList)?.todos || []}
              updateTodos={(todos) => updateTodos(openedList, todos)}/>
              <button
                className="border-none rounded-md bg-none text-white w-48 h-14 text-lg font-medium cursor-pointer mt-6"
                onClick={closeList}
              >
                Закрыть список
              </button>
            </div>
          ) : (
            <div className="flex justify-center items-center h-full">
              <p className="text-slate-300 text-3xl text-center">Здесь будет список.<br/>Чтобы его открыть, нажмите на стрелочку на списке</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;