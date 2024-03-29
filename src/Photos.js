import React from "react";
import "./Photos.css";
import Carousel from 'nuka-carousel';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function Photos(props) {
  if (props.photos) {
    return (
      <Carousel wrapAround={true}
                cellSpacing={1}
                slideIndex={0} 
                renderTopCenterControls={({ currentSlide }) => (
                  <span className="photos">{}</span>
                )}
                renderCenterLeftControls={({ previousSlide }) => (
                  <button onClick={previousSlide}> {faArrowLeft} </button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
            <button onClick={nextSlide}>{faArrowRight}</button>
                )}
              >
          {props.photos.map(function (photos, index) {
            return (
                <a key={index}
                  href={photos.src.original}
                  target="_blank"
                  rel="noreferrer"
                  alt={photos.alt}
                >
                  <img 
                    src={photos.src.landscape}
                    className="img-fluid"
                    alt={photos.alt}
                  />
                </a>
            );
          })}
      </Carousel>   
  );
  } else {
    return null;
  }
}