import { useState, useEffect } from 'react'
import axios from 'axios'

const PopulationChart = ({country}) => {

    const [years, setYears] = useState([]);
    const [loading, setLoading] = useState(true);

    const hook = () => {
        console.log('effect')
        axios
        .get(`https://api.worldbank.org/v2/country/${country.cca3}/indicator/SP.POP.TOTL?format=json`)
        .then(response => {
            console.log('promise fulfilled')
            setYears(response.data)
        })
        .finally(() => {
            setLoading(false)
        })
    }

    useEffect(hook, [])
    console.log('render', years.length, 'years')
        return (
            <>
            {loading 
            ? (<p>Loading...</p>)
            : (
            <ul>
                {years[1].map(year =>
                <li key = {year.date}>{year.date}   {year.value}</li>)}
            </ul>)}
            </>
        )
}

export default PopulationChart