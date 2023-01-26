import React, { useState } from 'react'
import { milkType } from '../models/IMilk';
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { setCheckBox } from '../redux/slices/filterSlice'
import './Filter.css'

const Filter = () => {

const milkTypes = Object.values(milkType).map((el: string) => (el));

 const type = useAppSelector((state) => state.milkFilter.type);
 const dispatch = useAppDispatch();


 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if(e.target.checked){
  console.log(e.target.value);
  dispatch(setCheckBox(e.target.value)) 
} else{
  dispatch(setCheckBox(''))
}
}

  return (
    <div className='dropdown'>Filter
   
       {milkTypes.map((el, index) => (
        <label>
        <input 
          key = {index}
          value={el}
          name= {el}
          type='checkbox'
          onChange={handleChange}
        />
        {el}
        </label>
       ))}
      

    </div>
  )
}

export default Filter