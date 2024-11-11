/* eslint-disable react/prop-types */
import "../App.css";

const Todo = ({ dados, funcDeleteTodo, funcCompleteTodo }) => {
  return (
    <div className="todo" style={{textDecoration: dados.isCompleted ? "line-through" : ''}}>
      <div className="content">
        <p>{dados.text}</p>
        <div className="category">
          <p>({dados.category})</p>
        </div>
      </div>
      <div>
        <button className="complete"
        onClick={()=>funcCompleteTodo(dados.id)}
        >completar</button>
        <button className="remove"
        onClick={()=>funcDeleteTodo(dados.id)}
        >X</button>
      </div>
    </div>
  );
};

export default Todo;
