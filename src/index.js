import React, { useState, useEffect } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
import "./index.css";
import "./volumeBtn.css";
import VolumeButton from "./VolumeButton";

const Main = () => {
  const [currentTrack, setcurrentTrack] = useState('')
  const [currentVolume, setcurrentVolume] = useState(0.5)
  return (
    <>
      <div className="drum-outerBorder">
        <div className="drum-innerBorder">
          <div className="drum-container">
            <DrumPad setcurrentTrack={setcurrentTrack} currentVolume={currentVolume} />
            <DrumButtons currentTrack={currentTrack} currentVolume={currentVolume} setcurrentVolume={setcurrentVolume} />
          </div>
        </div>
      </div>
    </>
  );
};

const DrumPad = ({setcurrentTrack, currentVolume}) => {

  const playDrum=(id)=>{
    let audioElem= document.getElementById(id)
    setcurrentTrack(id)
    audioElem.volume= (currentVolume)
    audioElem.play()
  }

  const bankOne = [
    [
      {
        className: "pad-1",
        keyCode: 81,
        keyTrigger: "Q",
        id: "Heater-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      },
      {
        className: "pad-2",
        keyCode: 87,
        keyTrigger: "W",
        id: "Heater-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      },
      {
        className: "pad-3",
        keyCode: 69,
        keyTrigger: "E",
        id: "Heater-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      },
    ],
    [
      {
        className: "pad-4",
        keyCode: 65,
        keyTrigger: "A",
        id: "Heater-4",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      },
      {
        className: "pad-5",
        keyCode: 83,
        keyTrigger: "S",
        id: "Clap",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      },
      {
        className: "pad-6",
        keyCode: 68,
        keyTrigger: "D",
        id: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      },
    ],
    [
      {
        className: "pad-7",
        keyCode: 90,
        keyTrigger: "Z",
        id: "Kick-n'-Hat",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      },
      {
        className: "pad-8",
        keyCode: 88,
        keyTrigger: "X",
        id: "Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      },
      {
        className: "pad-9",
        keyCode: 67,
        keyTrigger: "C",
        id: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      },
    ],
  ];
  return (
    <>
      <div className="drum-pads">
        {bankOne.map((row) => {
          return (
            <div className="row m-0">
              {row.map((item) => (
                <div className={`clip col-3 col-lg-3 col-md-3 pad my-3 mx-4 d-flex justify-content-center align-items-center ${item.className}`} onClick={() => playDrum(item.id)}>
                  {item.keyTrigger}
                  <audio
                    src={item.url}
                    id={item.id}
                    >
                  </audio>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
};

const DrumButtons = ({currentTrack, currentVolume, setcurrentVolume}) => {
  return (
    <div className="drum-buttons p-3 d-flex justify-content-center align-items-center">
      <div>
        <PowerSwitch />
        <PlayedSound currentTrack={currentTrack} />
        <VolumeButton currentVolume={currentVolume} setcurrentVolume={setcurrentVolume} />
      </div>
    </div>
  );
};

const PowerSwitch = () => {
  return (
    <div className="custom-control custom-switch">
      <input
        type="checkbox"
        className="custom-control-input"
        id="customSwitch1"
      />
      <label className="custom-control-label text-white" for="customSwitch1">
        Power
      </label>
    </div>
  );
};

const PlayedSound = ({currentTrack}) => {
  return (
    <>
      <div className="playedSoundContainer d-flex justify-content-center align-items-center font-weight-bold">
        {currentTrack}
      </div>
    </>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
