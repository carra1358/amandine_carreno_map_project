import './App.css';
import { Location } from './components/CurrentLocation';
import { Map } from './components/Map';
import { Visited } from './components/Visited';



function App() {



  return (
    <div className="App">
      <h1 className='App_title'>Map Project</h1>
      <Map></Map>
      <Location />
      <Visited/>
    </div>
  );
}

export default App;
