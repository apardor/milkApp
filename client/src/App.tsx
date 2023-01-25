import './App.css'
import Filter from './components/Filter';
import Milk from './components/Milk';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';


function App() {
  return (
    <div className="App">
      <Nav />
      <section className='main__section'> 
        <section className='search--filter__section'>
        <SearchBar />
        <Filter />
        </section>
      <Milk />
      </section>
    </div>
  )
}

export default App
