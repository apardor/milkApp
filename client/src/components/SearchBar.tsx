import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// import { useSelector, useDispatch } from 'react-redux'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import './SearchBar.css'
import { setFilter } from '../redux/slices/filterSlice'

const SearchBar = () => {


    const filter = useAppSelector((state) => state.milkFilter.filter);

    const dispatch = useAppDispatch();


    const handleSubmit = (e: React.SyntheticEvent) =>  e.preventDefault();
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setFilter(e.target.value))
    }

    
  return (
    <div>
        <form className='search' onSubmit={handleSubmit}>
        <FontAwesomeIcon className='search__icon' type='submit 'icon={faMagnifyingGlass} />
            <input className='search__input' value={filter} type='search' onChange={handleSearchChange} placeholder="Search" />
        </form>
    </div>
  )
}

export default SearchBar