import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Organizar arquivos",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar online",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {
    const newTodo = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodo);
  };

  const deleteTodo = (id) => {
    const newTodo = [...todos];
    const filterTodos = newTodo.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filterTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((e) => (e.id === id ? (e.isCompleted = !e.isCompleted) : e));
    setTodos(newTodos);
  };

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search constSearch={search} constSetSearch={setSearch} />
      <Filter filtro={filter} setFiltro={setFilter} setSort={setSort}/>
      <div className="todo-list">
        {todos
          .filter((todo) => filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted)
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) => sort === 'Asc' ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text) )
          .map((e) => (
            <Todo
              key={e.id}
              dados={e}
              funcDeleteTodo={deleteTodo}
              funcCompleteTodo={completeTodo}
            />
          ))}
      </div>
      <TodoForm funcAddTodo={addTodo} />
    </div>
  );
}

export default App;
