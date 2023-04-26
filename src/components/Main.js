import YouTube from 'react-youtube';
import { useState } from 'react';
import Editor from './Editor.js'
import '../static/Main.css'

function Main(){
  const connectVideo = (e) => {
    var url = e.target.value;
    if (url != undefined || url != '') {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            // Do anything for being valid
            // if need to change the url to embed url then use below line
            setNameState({name:url,value: 'https://www.youtube.com/embed/' + match[2] + '?autoplay=0'})
        }
        else {
          setNameState({name:url,value:url})
        }
        
    }
  }
    const [nameState,setNameState] = useState({
      name: "https://www.youtube.com/watch?v=5qap5aO4i9A",
      value: "https://youtube.com/embed/5qap5aO4i9A"
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
            <label style= {{paddingInlineEnd:'15px'}}>Enter Video/Meeting URL:</label>
            <input class="form-control w-50 pl-2 rounded" type="text" value={nameState.name} onChange={e => {connectVideo(e)}} />
        </form>
        </div>
        <iframe src={nameState.value}
        className="video"
        frameborder='0'
        allow='autoplay; encrypted-medial; gyroscope; picture-in-picture'
        allowfullscreen = "1"
        title='video'
        width = "97%"
        frameborder="0"
        />
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