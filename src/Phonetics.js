import React from "react";
import "./Phonetics.css";
import AudioPlayer from 'react-h5-audio-player'
import "react-h5-audio-player/lib/styles.css";

export default function Phonetics(props) {
  if (props.phonetics && props.phonetics.audio) {
    return (
      <>
      <div className="Phonetics">
        <div className="phonetics">{props.phonetics.text}</div>
       <div className="audio">
        <AudioPlayer
          autoPlay={false}
          showSkipControls={false}
          showDownloadProgress={false}
          showFilledProgress={false}
          showFilledVolume={false}
          customAdditionalControls={[]}
          showJumpControls={false}
          customVolumeControls={[]}
          layout="horizontal-reverse"  
          src={props.phonetics.audio}
        />
      </div>
      </div>
      </>
    );
  } else {
    return null;
  }
}