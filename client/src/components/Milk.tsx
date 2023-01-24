import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { IState, IMilk } from '../models/IMilk';
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
          count: res.data.count,
          results: res.data.results
      }))
      .catch(err => setbackendData({
          ...backendData,
          loading: false,
          errorMsg: err.message
      }))
  }, []);

  const {loading, count, results, errorMsg } = backendData;


  return (
    <section className='main__section'>
       {errorMsg && (<p>{errorMsg}</p>)}
      {loading && <h1>Loading... </h1>}
      <p>{count} products</p>
      <ul className='card__grid'> 
        {results.map(el=> {
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
        })}
      </ul>  
    </section>
  )
}

export default Milk