import './App.css';
import { movie_lis } from "./data/movie_list";
import Movie_navbar from './Movie_navbar';
function App() {
  return (
    <div className='App'>
      <Movie_navbar/>
      <ul className='list_'>{
         movie_lis.map((mov,index) => (
           <li>
            <img src={mov.Image} width='500px' height='500px' alt={mov.name}></img>
            <li><h1>{mov.name}</h1></li>
            <li><h1>{mov.Date}</h1></li>
            <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Purchase {mov.price}</button>
           </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
