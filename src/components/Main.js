import YouTube from 'react-youtube';
import { useState } from 'react';
import Editor from './Editor.js'
import '../static/Main.css'

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
    return(
    <div className="row">
    <div className="column">
        <div class ="px-2 py-2">
        <form class="form-inline">
            <label style= {{paddingInlineEnd:'15px'}}>Enter Video ID:</label>
            <input class="form-control w-50 pl-2 rounded" type="text" value={nameState.name} onChange={e => {setNameState({name:e.target.value})}} />
        </form>
        </div>
        <YouTube className= "video" videoId={nameState.name} opts={opts}/>
    </div>
    <div className="column" >
        <main style={{maxHeight:'70vh'}}>
          <Editor/> 
        </main>
    </div>
    </div>
    )
}
export default Main