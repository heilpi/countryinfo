import { useState } from 'react'
import PopulationData from "./PopulationData"


const Countries = ({country}) => {

    const [showChart, setShowChart] = useState(true)

    return (
        <>
            <h2>{country.name.common}</h2>
            <img src={country.flags.png} alt='' />
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <p>Continent: {country.continents}</p>
            
            <button class='button' onClick={() => setShowChart(!showChart)}>
                {showChart ? 'Show' : 'Hide' } population over time    
            </button> 
            {showChart ? 
                (null) : (<PopulationData country = {country}/>
            )}
            
        </>
    )
}

export default Countries