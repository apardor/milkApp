import './App.css'
import Milk from './components/Milk';
import Nav from './components/Nav';
import SearchBarFilter from './components/SearchBarFilter';


function App() {
  return (
    <div className="App">
      <Nav />
      <section className='main__section'> 
      <SearchBarFilter />
      <Milk />
      </section>
    </div>
  )
}

export default App
