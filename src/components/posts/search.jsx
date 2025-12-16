import '../../App.css';

function Search({value, setValue}) {
    return(
        <div className="searchContainer">
            <input type="text" 
                   className="search" 
                   placeholder="&#x1F50D; Search"
                   value={value}
                   onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}

export default Search