import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }

  useEffect(hook, [])
  console.log('render', countries.length, 'countries')

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const filteredSearch = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLocaleLowerCase())
  );
  console.log(filteredSearch);

  return (
    <div>
        <p>
          Edit 
        </p>
    </div>
  );
}

export default App;
