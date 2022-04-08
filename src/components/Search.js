const Search = (props) => {
    return (
        <div>
            <p>country</p>
            <input
                value = {props.search}
                onChange = {props.handleSearch}
            />
        </div>
    )
}

export default Search