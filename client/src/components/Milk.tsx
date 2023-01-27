import axios from 'axios';
import { useState, useEffect } from 'react'
import { IState, IMilk } from '../models/IMilk';
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import './Milk.css'
import milkImage from '../assets/milk.png' 
import Pagination from './Pagination';
import { Link } from 'react-router-dom';


const Milk = () => {

    const initialState = {
      loading: true,
      count: 0,
      results: [] as IMilk[],
      errorMsg: "",
    }
  
    const [backendData, setbackendData ] = useState<IState>(initialState); 
    const [currentPage , setCurrentPage] = useState<number>(1);
    const [resultsPerPage , setresultsPerPage] = useState<number>(9);

    useEffect(()=>{
      setbackendData({...backendData, loading: true})
      axios.get('/api/milk')
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

  const {loading, count, results, errorMsg } = backendData;

  const filterByQuery = useAppSelector((state) => state.milkFilter.filter);
  const filterByCheckBox= useAppSelector((state) => state.milkFilter.type);


  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstPost = indexOfLastResult - resultsPerPage;
  const currentResults = results.slice(indexOfFirstPost, indexOfLastResult);


  let res = results
      .filter((el) => 
      filterByQuery ? el.name.includes(filterByQuery) || el.type.includes(filterByQuery) : true,
      )
      .filter((el) => 
      filterByCheckBox ? el.type.includes(filterByCheckBox) : true,
      )
      .map(el=> {
        return(<>
        <Link to={`/milk/${el._id}`}>
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
        </Link>
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
      <Pagination resultsPerPage={resultsPerPage} totalResults={results.length} setCurrentPage={setCurrentPage} />
    </section>
  )
}

export default Milk