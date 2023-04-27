import { useState } from 'react';
import Editor from './Editor.js'
import '../static/Board.css'
import CopyButton from './CopyButton'

function Board() {

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
    name: "https://www.youtube.com/watch?v=bmVKaAV_7-A",
    value: "https://youtube.com/embed/bmVKaAV_7-A"
  })
    
    return(
    <div className="row">
    <div className="column">
        <div className ="px-2 py-2">
        <form className="form-inline">
            <label style= {{paddingInlineEnd:'15px'}}>Enter Video/Meeting URL:</label>
            <input className="form-control w-50 pl-2 rounded" type="text" value={nameState.name} onChange={e => {connectVideo(e)}} />
        </form>
        </div>
        <iframe src={nameState.value}
        className="video"
        frameBorder='0'
        allow='autoplay; encrypted-medial; gyroscope; picture-in-picture'
        allowFullScreen = "1"
        title='video'
        width = "97%"
        frameBorder="0"
        />
    </div>
    <div className="column" >
        <main style={{maxHeight:'70vh'}}>
          <form className="form-inline">
          <label style= {{fontFamily:'sans-serif,Poppins',paddingInlineEnd:'5px'}}>Share this board with your friends now! </label>
          <CopyButton/>
          </form>
          <Editor/> 
        </main>
    </div>
    </div>
    )
}
export default Board