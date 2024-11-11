const Filter = ({filtro, setFiltro, setSort}) => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div className="filter-status">
          <p>status:</p>
          <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="noCompleted">A fazer</option>
          </select>
        </div>
        <div className="filter-ordem-alfabetica">
          <p>Ordem alfabética:</p>
          <button onClick={()=> setSort('Asc')}>Asc</button>
          <button onClick={()=> setSort('Desc')}>Desc</button>
        </div>
      </div>
    </div>
  );
};
export default Filter;
