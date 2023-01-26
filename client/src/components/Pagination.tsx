import React from 'react'
import './Pagination.css'
import { IPaginationProps } from '../models/IMilk';

const Pagination = ({resultsPerPage, totalResults, setCurrentPage}: IPaginationProps) => {

let pageNumbers:number[] = [];

for(let i =1; i<=Math.ceil(totalResults/resultsPerPage); i++){
    pageNumbers.push(i)
}


return (
    <ul className='pagination'>
        {pageNumbers.map(page=> {
            return (
                <li key={page} onClick={() => setCurrentPage(page)}  className='page__item'>
                        {page}
                </li>
            )
        })}
    </ul>
  )
}

export default Pagination 