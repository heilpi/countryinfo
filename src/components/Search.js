const Search = (props) => {
    return (
        <div>
            country
            <input
                value = {props.search}
                onChange = {props.handleSearch}
            />
        </div>
    )
}

export default Search