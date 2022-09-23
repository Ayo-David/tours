import React, { useState, useEffect } from 'react';



function Slides({ slides }) {

  const [index, setIndex] = useState(0)
  const { title, text } = slides[index]
  const [disabled, setDisabled] = useState({ next: false, prev: false, start: true })
  //const [disabled, setDisabled] = useState({ next: false, prev: true, start: true })


  const handleNext = () => {
    setIndex(index + 1)
  }

  const checkIndex = () => {
    if (index === slides.length - 1) {
      return { ...disabled, next: true, prev: false }
    } else if (index === 0) {
      return { ...disabled, prev: true }
    } else {
      return { ...disabled, prev: false, next: false, start: false }
    }

  }

  useEffect(() => {
    // index === slides.length - 1 ?
    //   (setDisabled({ ...disabled, next: true, prev: false }))
    //   : index === 0 ? setDisabled({ ...disabled, prev: true })
    //     : setDisabled({ ...disabled, prev: false, next: false, start: false })
    setDisabled(checkIndex())
    console.log('myindex', index)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, slides.length]) //add disabled will cost the app to be 
  //re-rendering incessantly because disable will always change in every render and useEffect



  const handleRestart = () => {
    setIndex(0)
    setDisabled({ ...disabled, start: true })
  }

  return (
    <div>
      <div id="navigation" >
        <button data-testid="button-restart" onClick={handleRestart} disabled={disabled.start}>Restart</button>
        <button data-testid="button-prev" onClick={() => setIndex(index - 1)} disabled={disabled.prev}>Prev</button>
        <button data-testid="button-next" onClick={handleNext} disabled={disabled.next}>Next</button>
      </div>
      <div id="slide" >
        <h1 data-testid="title">{title}</h1>
        <p data-testid="text">{text}</p>
      </div>
    </div>
  );

}

export default Slides;