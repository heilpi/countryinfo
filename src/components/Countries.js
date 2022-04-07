const Countries = ({country}) => {
    return (
        <>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <p>Continent: {country.continents}</p>
            <p>Timezone:{country.timezones} </p>
            <img src={country.flags.png} alt='' />
        </>
    )
}

export default Countries