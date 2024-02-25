import { TodoItem } from "./TodoItem"

// eslint-disable-next-line react/prop-types
export function TodoList({ itemList, toggleItem, removeTodo , inputRef}) {
    return (
        <ul className="list" ref={inputRef}>
            {
                // eslint-disable-next-line react/prop-types
                itemList.length === 0 && "No Todos"
            }
            {
                // eslint-disable-next-line react/prop-types
                itemList.map(item => {
                    return (
                        <TodoItem
                            {...item}
                            toggleItem={toggleItem}
                            removeTodo={removeTodo}
                            key={item.id}
                        />
                    );
                })
            }
        </ul>
    );
}
