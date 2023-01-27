import axios from 'axios';
import { useState, useEffect } from 'react'
import { IState, IMilk } from '../models/IMilk';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import './OneMilk.css'

const OneMilk = () => {
  
    const {id} = useParams();

    const initialState = {
        loading: true,
        count: 0,
        results: [] as IMilk[],
        errorMsg: "",
      }
    
      const [backendData, setbackendData ] = useState<IState>(initialState); 

   
    useEffect(()=>{
        setbackendData({...backendData, loading: true})
        axios.get(`/api/milk/${id}`)
        .then((res) => setbackendData({  
            ...backendData,
            loading: false,
            results: res.data.milk
        }))
        .catch(err => setbackendData({
            ...backendData,
            loading: false,
            errorMsg: err.message
        }))
    }, []); 

    
    const {loading, results, } = backendData;

  
console.log(results, 'here are results');

   



  return (
    <>
        <Link to={`/`}>Back</Link>
            <h3>{results.name}</h3>
            <p>{results.type}</p>    
    </>
   
  )
}

export default OneMilk
