import React from'react';
import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <h1>Dictionary</h1>
        <h2 id="h2holder">Let's search something, shall we?</h2>
        <Dictionary defaultKeyword="" />
        <br />
        <footer>
         This app was created by ©Florentina Simion, as part of SheCodes React final project.
         <br/>
         {" "}Open-sourced on{" "}
          <a
            href="https://github.com/Latteflo/Dictionary"
            target="_blank"
            rel="noopener noreferrer">
          Github
          </a>{" "}|{" "}
          <a href="https://62968f6d481f6b0b614d4c68--dictionary-project-flo.netlify.app/">
            Hosted on Netlify
          </a>{" "}|{" "}
          <a href="https://www.pexels.com">Photos provided by Pexels
          </a>{" "}|{" "}
          <a href="http://www.freepik.com">Background by Freepik
          </a>
        </footer>
      </div>
    </div>
  );
}