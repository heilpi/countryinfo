import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Info from './components/Info'

const App = () => {

  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

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

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const filteredSearch = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLocaleLowerCase())
  );
  console.log(filteredSearch);

  return (
    <>
      <Search
        search = {search}
        handleSearch = {handleSearch}
      />
      <Info
        search = {search}
        filteredSearch = {filteredSearch}
        />
    </>
  );
}

export default App;
