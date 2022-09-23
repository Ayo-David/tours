import React, { useState, useEffect } from 'react';



function Slides({ slides }) {

  const [index, setIndex] = useState(0)
  const { title, text } = slides[index]
  const [disableNext, setDisableNext] = useState(false)
  const [disablePrev, setDisablePrev] = useState(false)
  const [disableStart, setDisableStart] = useState(false)

  const handleNext = () => {
    console.log(index)
    // if (index === slides.length - 1) {
    //   setDisableNext(true)
    //   setDisablePrev(false)
    //   setDisableStart(false)
    // } else {
    //   setDisablePrev(false)
    //   setIndex(index + 1)
    //   setDisableStart(false)
    // }
    setIndex(index + 1)

  }

  useEffect(() => {
    console.log('initial', index)
    if (index === slides.length - 1) {
      setDisableNext(true)
      setDisablePrev(false)
      setDisableStart(false)
    } else if (index === 0) {
      setDisablePrev(true)
      setDisableNext(false)
      setDisableStart(true)
    } else {
      setDisableStart(false)
      setDisableNext(false)
      setDisablePrev(false)
    }

  }, [index, slides.length])

  const handlePrev = () => {

    setIndex(index - 1)
  }

  const handleRestart = () => {
    setIndex(0)
    setDisableStart(true)
  }

  return (
    <div>
      <div id="navigation" >
        <button data-testid="button-restart" onClick={handleRestart} disabled={disableStart}>Restart</button>
        <button data-testid="button-prev" onClick={handlePrev} disabled={disablePrev}>Prev</button>
        <button data-testid="button-next" onClick={handleNext} disabled={disableNext}>Next</button>
      </div>
      <div id="slide" >
        <h1 data-testid="title">{title}</h1>
        <p data-testid="text">{text}</p>
      </div>
    </div>
  );

}

export default Slides;