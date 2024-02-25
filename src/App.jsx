import "./styles.css";
import { useState, useEffect, useRef } from "react";
import { TodoForm } from "./TodoForm"
import { TodoList} from "./TodoList";

function App() {
  const [itemList, setItemList] = useState(() => {
    const localValue = JSON.parse(localStorage.getItem("ITEM")) || null;
    return localValue ? localValue : [];
  });

  const ref = useRef(null);
  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(itemList));
  }, [itemList])

  function toggleItem(id, completed) {
    setItemList(prevItemList => {
      return prevItemList.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    })
  } 

  function removeTodo(id) {
    setItemList(prevItemList => {
      return prevItemList.filter(todo => todo.id !== id);
    })
  }

  function updateList(newItem) {
    setItemList(prevTodo => {
        return [
            ...prevTodo,
            {
                id: crypto.randomUUID(),
                title: newItem,
                completed: false,
            },
        ];
    });
  }

  return (
      <>
          <TodoForm onSubmit={updateList} inputRef={ref} />
          <h1 className="header">TODO LIST</h1>
          <TodoList
              removeTodo={removeTodo}
              toggleItem={toggleItem}
              itemList={itemList}
              inputRef={ref}
          />
      </>
  );
}

export default App
