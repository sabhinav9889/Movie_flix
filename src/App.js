import './App.css';
import { Movielist } from "./data/Movielist";
import Movienavbar from './Movienavbar';
function App() {
  return (
    <div className='App'>
      <Movienavbar/>
      <ul className='list_'>{
         Movielist.map((mov,index) => (
          <div key={index}>
           <li >
            <img src={mov.Image} width='500px' height='500px' alt={mov.name}></img>
            <ul>
              <li ><h1>{mov.name}</h1></li>
              <li ><h1>{mov.Date}</h1></li>
            </ul>
            <button type="button" className="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Purchase {mov.price}</button>
           </li>
           </div>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
