const Search = ({constSearch, constSetSearch}) => {
  return (
    <div className="search">
        <h2>Pesquisar:</h2>
        <input type="text" 
        value={constSearch}
        onChange={(e) => constSetSearch(e.target.value)}
        placeholder="Digite para pesquisar..."
        />
    </div>
  )
}

export default Search