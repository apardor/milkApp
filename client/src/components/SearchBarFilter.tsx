import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './SearchBarFilter.css'

const SearchBarFilter = () => {

    const handleSubmit = (e: React.SyntheticEvent) =>  e.preventDefault();
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {    }

  return (
    <div className='search--filter__container'>
        <form className='search' onSubmit={handleSubmit}>
        <FontAwesomeIcon className='search__icon' icon={faMagnifyingGlass} />
            <input className='search__input' type='search' onChange={handleSearchChange} placeholder="Search" />
        </form>

        <div className='filter'>
        Filter
        </div>
    </div>
  )
}

export default SearchBarFilter