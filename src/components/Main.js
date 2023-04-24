import {Container,Row, Col} from 'react-bootstrap'
import '../css/Main.css'
import YouTube from 'react-youtube';
import { useState } from 'react';

function Main(){

    const [nameState,setNameState] = useState({
      name: "5qap5aO4i9A"
    })
    
    const opts = {
        height: 'inherit',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const val = "Enter Video ID: "
    return(
    <div className="row">
    <div className="column">
        <h2>Video</h2>
        <div class ="px-5 py-2">
        <form class="form-inline">
            <label >{val}</label>
            <input class="form-control w-75 pl-2" type="text" value={nameState.name} onChange={e => {setNameState({name:e.target.value})}} />
        </form>
        </div>
        <YouTube className= "video" videoId={nameState.name} opts={opts}/>;
    </div>
    <div className="column" >
        <h2>Text</h2>
        <textarea placeholder ="Text Area" class="form-control h-75 my-lg-5"></textarea>
    </div>
    </div>
    )
}
export default Main