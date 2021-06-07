const SearchBar = (props) => (
    <form action="/" method="get">
        <label htmlFor="header-search">
        </label>
        <input
            value={props.query}
            type="text"
            id="header-search"
            placeholder=""
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;