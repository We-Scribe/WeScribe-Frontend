import { useState, useEffect } from "react";
import Editor from "./Editor.js";
import "../static/Board.css";
import CopyButton from "./CopyButton";
import Witeboard from "./Witeboard";

import axios from "axios";

import { NOTES_URL, NOTES_DETAILS_URL } from "../api/constants";
import { getConfig } from "../utils/getConfig";
import { ErrorHandler } from "../utils/ErrorHandler";

function Board(props) {
  const [idState, setIdState] = useState("");

  const [nameState, setNameState] = useState({
    name: "https://www.youtube.com/watch?v=bmVKaAV_7-A",
    value: "https://youtube.com/embed/bmVKaAV_7-A",
  });

  const [boardState, setBoardState] = useState({
    value: "firepad",
  });

  useEffect(() => {
    axios
      .get(NOTES_URL)
      .then((res) => {
        const match = "/" + window.location.hash;
        const result = res.data.filter((e) => e.boardID === match);
        const id = result[0].id;
        const videoLink = result[0].videoLink;
        setIdState(id);
        if(videoLink !== "") {
          connectVideo(videoLink);
        }
      })
      .catch((err) => {
        console.log(ErrorHandler(err));
      });
  }, []);

  const youtubeURLCheck = (url) => {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length == 11) {
      return "https://www.youtube.com/embed/" + match[2] + "?autoplay=0";
    } else {
      return url;
    }
  };

  const connectVideo = (e) => {
    var url = "";
    if (typeof e === "object") {
      url = e.target.value;
    } else if (typeof e === "string") {
      url = e;
    }
    if (url != undefined || url != "") {
      const value = youtubeURLCheck(url);
      setNameState({
        name: url,
        value: value,
      });
    }
  };

  const onChangeVideoState = (e) => {
    connectVideo(e);

    if (idState !== "") {
      e.preventDefault();

      axios
        .put(
          NOTES_DETAILS_URL + idState + "/",
          {
            videoLink: e.target.value,
          },
          getConfig()
        )
        .then((res) => {})
        .catch((err) => {
          console.log(ErrorHandler(err));
        });
    }
  };

  const switchBoard = () => {
    if (boardState.value == "firepad") {
      setBoardState({
        value: "witeboard",
      });
    } else {
      setBoardState({
        value: "firepad",
      });
    }
  };

  return (
    <div className="row">
      <div className="column">
        <div className="px-2 py-2">
          <form className="form-inline">
            <label style={{ paddingInlineEnd: "15px" }}>
              Enter Video/Meeting URL:
            </label>
            <input
              className="form-control w-50 pl-2 rounded"
              type="text"
              value={nameState.name}
              onChange={onChangeVideoState}
            />
          </form>
        </div>
        <iframe
          src={nameState.value}
          className="video"
          frameBorder="0"
          allow="autoplay; encrypted-medial; gyroscope; picture-in-picture"
          allowFullScreen="1"
          title="video"
          width="97%"
          frameBorder="0"
        />
      </div>
      <div className="column">
        <main style={{ maxHeight: "70vh" }}>
          <form className="form-inline">
            <label
              style={{
                fontFamily: "sans-serif,Poppins",
                paddingInlineEnd: "5px",
              }}
            >
              Share this board with your friends now!{" "}
            </label>
            <CopyButton />
            <label
              style={{
                fontFamily: "sans-serif,Poppins",
                paddingInlineEnd: "5px",
                color: "transparent",
              }}
            >
              ....
            </label>
            <button
              type="button"
              class="btn btn-primary"
              id="toggle"
              onClick={switchBoard}
            >
              {boardState.value == "firepad"
                ? "Switch to Whiteboard"
                : "Switch to Text Editor"}
            </button>
          </form>
          <div id="editor" style={{ paddingTop: "1vh" }}>
            {boardState.value == "firepad" ? <Editor /> : <Witeboard />}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Board;