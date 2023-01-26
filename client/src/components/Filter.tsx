import React, { useState } from 'react'
import { milkType } from '../models/IMilk';
import { useAppSelector, useAppDispatch } from '../redux/hooks'


import './Filter.css'

const Filter = () => {

const milkTypes = Object.values(milkType).map((el: string) => (el));

const [checked, setChecked] = useState<boolean>(false)

 const [milk, setMilk] = useState <milkType>();

 const filter = useAppSelector((state) => state.milkFilter.filter);

 const handleChange = () => {
  setChecked(!checked);
 }

  const dispatch = useAppDispatch();

  return (
    <div className='dropdown'>Filter
   
        {/* <select className="selectBootcamp" value={milk} onChange={e=> setMilk(e.target.value)}>
            {milkTypes.map(el => (
            <option key={el} value={el}>
                {el}
            </option>
            ))}
            </select> */}
       {milkTypes.map(el => (
        <label>
        <input 
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