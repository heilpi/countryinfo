import Countries from "./Countries"
import CountryName from "./CountryName"

const Info = (props) => {
    return (
        <>
            {props.search === '' 
            ? ([]) 
            : props.filteredSearch.length > 10 ? (
            <p>More than ten matching results.</p>)
            : (props.filteredSearch.map((country) =>
            // console.log(country)
            props.filteredSearch.length <= 10 && props.filteredSearch.length > 1 ? (
            <CountryName
              key={country.cca3}
              country={country}
              // onSubmit={handleClick}
            />) 
            : (
            <Countries key={country.cca3} country={country} />
          )
        )
      )}
        </>
    )
}

export default Info