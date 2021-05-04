import { MouseEventHandler } from "react";

function Todo({text}: {text: string}) {
  const deleteHandler: MouseEventHandler<HTMLButtonElement> = function(event) {
  }

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
