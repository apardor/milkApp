import React, { useEffect, useState } from 'react'
import { milkType } from '../models/IMilk';
import Multiselect from 'multiselect-react-dropdown';

import './Filter.css'

const Filter = () => {

const milkTypes = Object.values(milkType).map((el: string) => (el));

 const [milk, setMilk] = useState <milkType>();

 useEffect(()=> {
 }, [])

  return (
    <div>Filter
   
        <select className="selectBootcamp" value={milk} onChange={e=> setMilk(e.target.value)}>
            {milkTypes.map(el => (
            <option key={el} value={el}>
                {el}
            </option>
            ))}
            </select>
      

    </div>
  )
}

export default Filter