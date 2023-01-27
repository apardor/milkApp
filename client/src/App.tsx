import './App.css'
import Filter from './components/Filter';
import Milk from './components/Milk';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import { Route, Routes } from 'react-router-dom';
import OneMilk from './components/OneMilk';


function App() {
  return (
    <div className="App">
      <Nav />
      <section className='main__section'> 
        <section className='search--filter__section'>
        <SearchBar />
        <Filter />
        </section>
        <Routes>
          <Route path='/' element={<Milk />} />
          <Route path='/milk/:id' element={<OneMilk />} />
        </Routes>  
      </section>
    </div>
  )
}

export default App
