import PopulationChart from "./PopulationChart"

const Countries = ({country}) => {
    return (
        <>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <p>Continent: {country.continents}</p>
            <img src={country.flags.png} alt='' />
            <PopulationChart country = {country}/>
        </>
    )
}

export default Countries