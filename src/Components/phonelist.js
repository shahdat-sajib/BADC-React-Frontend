import React from "react";
import { CheckCircle } from "@mui/icons-material";
import { Delete } from "@mui/icons-material";
import { Edit } from "@mui/icons-material";
export default function Phonelist({
    todo,
    toggleComplete,
    handleDelete,
    handleEdit
}) {
    const [newTitle, setNewTitle] = React.useState(todo.title);

    const handleChange = (e) => {
        e.preventDefault();
        if (todo.complete === true) {
          setNewTitle(todo.title);
        } else {
          todo.title = "";
          setNewTitle(e.target.value);
        }
      };

    return (
        <div>
            <input
            style={{textDecoration: todo.completed && "line-through"}}
            type="text"
            value={todo.title === "" ? newTitle : todo.title}
            className="list"
            onChange={handleChange}
            />
            <div>
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <CheckCircle id="i" />
        </button>
        <button
          className="button-edit"
          onClick={() => handleEdit(todo, newTitle)}
        >
          <Edit id="i" />
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          <Delete id="i" />
        </button>
      </div>
        </div>
    )
}