import PopulationChart from "./PopulationChart"
import { useState } from 'react'


const Countries = ({country}) => {

    const [showChart, setShowChart] = useState(true)

    return (
        <>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <p>Continent: {country.continents}</p>
            <img src={country.flags.png} alt='' />
            <>
            <button onClick={() => setShowChart(!showChart)}>
                {showChart ? 'Show' : 'Hide' } population chart    
            </button> 
            </>
            {showChart ? 
                (null) : (<PopulationChart country = {country}/>
            )}
            
        </>
    )
}

export default Countries