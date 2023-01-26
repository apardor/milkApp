import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { IState, IMilk } from '../models/IMilk';
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import './Milk.css'
import milkImage from '../assets/milk.png' 


const Milk = () => {

    const initialState = {
      loading: true,
      count: 0,
      results: [] as IMilk[],
      errorMsg: "",
    }
  
    const [backendData, setbackendData ] = useState<IState>(initialState); 

    useEffect(()=>{
      setbackendData({...backendData, loading: true})
      axios.get('/api/milk')
      .then((res) => setbackendData({
          ...backendData,
          loading: false,
          count: res.data.results.length,
          results: res.data.results
      }))
      .catch(err => setbackendData({
          ...backendData,
          loading: false,
          errorMsg: err.message
      }))
  }, []);

  const {loading, count, results, errorMsg } = backendData;

  const filterBy = useAppSelector((state) => state.milkFilter.filter);

  let res = results
      .filter((el) => 
      filterBy ? el.name.includes(filterBy) || el.type.includes(filterBy) : true,
      )
      .map(el=> {
        return(<>
        <li key={el.id.toString()} className='card'>
          <div className='card__image'>
          <img src={milkImage} alt='milkbox' className='image'></img>
          </div>
          <div className='card__container'>
          <h3>{el.name}</h3>
          <p>{el.type}</p>
          <p>{el.storage}</p>
          </div>
        </li>
        </>
        )          
      })

  return (
    <section className='main__section'>
       {errorMsg && (<p>{errorMsg}</p>)}
      {loading && <h1>Loading... </h1>}
      <p>{res.length} products</p>
      <ul className='card__grid'> 
        {res}
      </ul>  
    </section>
  )
}

export default Milk