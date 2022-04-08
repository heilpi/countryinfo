import { useState, useEffect } from 'react'
import { Line } from "react-chartjs-2"
import axios from 'axios'

const PopulationData = ({country}) => {

    const [years, setYears] = useState([]);
    const [loading, setLoading] = useState(true);
    /* const [data, setData] = useState([]); */

    let title = [];
    let id = [];

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


        /* setTimeout( () =>{
            years[1].forEach(year => {
            title.push(year.date);
            id.push(year.value);
        });
        }, 5000);
        

        setData({
            Data: {
            labels: title,
            datasets: [
                {
                label: "Population",
                data: id
                }
            ]
            }
        }) */
    
        return (
            <>
            {loading 
            ? (<p>Loading...</p>)
            : (
            <ul>
                {years[1].map(year =>
                <li key = {year.date}>{year.date}   {year.value}</li>)}
            </ul>/* ,
            <>
                <Line> data ={data.Data}</Line>
            </> */
            )}
            </>
        )
}

export default PopulationData