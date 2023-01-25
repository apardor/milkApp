import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './SearchBar.css'

const SearchBar = () => {

    const [search, setSearch] = useState('');

    const handleSubmit = (e: React.SyntheticEvent) =>  e.preventDefault();
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
    }

    console.log(search);
    


  return (
    <div>
        <form className='search' onSubmit={handleSubmit}>
        <FontAwesomeIcon className='search__icon' type='submit 'icon={faMagnifyingGlass} />
            <input className='search__input' type='search' onChange={handleSearchChange} placeholder="Search" />
        </form>
    </div>
  )
}

export default SearchBar