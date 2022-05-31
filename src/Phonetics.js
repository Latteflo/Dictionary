import React from "react";
import "./Phonetics.css";
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import "react-h5-audio-player/lib/styles.css";

export default function Phonetics(props) {
  if (props.phonetics && props.phonetics.audio) {
    return (
      <div className="Phonetics">
        <div className="phonetics">{props.phonetics.text}</div>
       <div className="audio">
        <AudioPlayer
          style={{
            width: "550px",
            margin: "0 0 0 0px",
          }}
          customAdditionalControls={[]}
          showJumpControls={false}
          customVolumeControls={[]}
          layout="horizontal-reverse"  
          customProgressBarSection={
            [
              RHAP_UI.PROGRESS_BAR,
              RHAP_UI.CURRENT_TIME,
              <div>/</div>,
              RHAP_UI.DURATION
            ]
          }
          src={props.phonetics.audio}
        />
      </div>
      </div>
    );
  } else {
    return null;
  }
}