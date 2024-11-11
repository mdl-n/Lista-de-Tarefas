/* eslint-disable react/prop-types */
import { useState } from 'react'
import  '../App.css'

function TodoForm({funcAddTodo}) {
    const [txt, setTxt] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!txt || !category){
            alert('preencha os campos!')
            return;
        }
        funcAddTodo(txt, category)
        setTxt('');
        setCategory('');
       
    }
  return (
    <div className='todo-form'>
      <h2>Criar tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Digite o titulo' value={txt}
        onChange={(e) => setTxt(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho" >Trabalho</option>
            <option value="Pessoal" >Pessoal</option>
            <option value="Estudos" >Estudos</option>
        </select>
        <button type='submit'>Criar tarefa</button>
      </form>
    </div>
  )
}

export default TodoForm
