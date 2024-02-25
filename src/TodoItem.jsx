
// eslint-disable-next-line react/prop-types
export function TodoItem({ id, completed, title, toggleItem , removeTodo}) {
    return (
        <li key={id}>
            <label>
                <input
                    type="checkbox"
                    onChange={e => toggleItem(id, e.target.checked)}
                    checked={completed}
                />
                {title}
            </label>
            <button className="btn btn-danger" onClick={() => removeTodo(id)}>
                {" "}
                Remove{" "}
            </button>
        </li>
    );
}

