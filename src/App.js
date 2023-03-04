import './App.css';
import items from './eatsy.json';
import Listing from './components/Listing';

console.log(items[0].listing_id);

function App() {
  return (
    <div className="App">
    <Listing items={items}/>
    </div>
    );
  }
  
  export default App;
  