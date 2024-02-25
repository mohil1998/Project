import { useState } from "react";
import "./styles.css";

// eslint-disable-next-line react/prop-types
export function TodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("");

    const onClickHandler = () => {
        console.log("onClickHandler handler");
        // inputRef.current.focus;
    }

    return (
        <form onSubmit={() => onSubmit(newItem)} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    type="text"
                    id="item"
                />
            </div>
            <button className="btn" onClick = {onClickHandler}>Add</button>
        </form>
    );
}
