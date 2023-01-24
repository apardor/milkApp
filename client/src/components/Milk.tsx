import axios from 'axios';
import React, { useState, useEffect } from 'react'


const Milk = () => {

    const [backendData, setbackendData ] = useState([]);    

    const milk = async() => {
        try{
             await axios.get('/api/milk')
            .then( res => setbackendData(res.data))
        }catch (error){
            console.log(error);
        }
    }


    console.log(backendData, 'here is data with axios');
    
    
    useEffect(()=>{
        milk();
    },[])
    


  return (
    <div>Milk</div>
  )
}

export default Milk