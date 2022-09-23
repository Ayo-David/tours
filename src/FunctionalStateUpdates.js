import React, { useCallback, useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(100);

  const firstCallback = () => setCounter((count) => count + 10);

  const secondCallback = useCallback(() => {
    // counter state is re-enclosed within our callback scope ensuring that the state is updated
    setCounter(counter + 1);//this will be overwritten by the next setState
    setCounter(counter + 10);

    console.log(`I'm rendered = `, counter)

  }, [counter]);

  const thirdCallback = useCallback(() => {
    // “counter” value is stale from the initial render
    setCounter(counter + 10);
  }, []); // <-- Here linter also warns about the missing dependency array 

  const fourthCallback = useCallback(() => {
    // This is an example of functional state update avoiding stale state enclosures
    setCounter((count) => count + 10);
  }, []);

  const fifthcallback = () => {
    //this can miss an update if there's another call on the setState
    //the first one may not have finished, so the second will overwrite the first
    // assume counter equals some number num
    setCounter(counter + 1); //   setCounter(counter + 10); // update queued, counter === num, counter = num + 10    setCounter(counter + 10); // update queued, counter === num, counter = num + 10    // when processed the counter will be num + 10
    setCounter(counter + 5); // update queued, counter === num, counter = num + 10 //this will overwrite the one above it
  };

  /**
   * counter + 10 handler using functional state update
   */
  const sixthcallback = () => {
    //using this functional state update, ensure each setState is done and pass 
    //the previous state to the next call
    // assume “counter” equals some number num
    setCounter((c) => c + 3); // update is queued, counter === num + 0, counter = previouscounter + 10
    setCounter((d) => d + 10); // update is queued, counter === num + 1, counter = previouscounter + 10
    setCounter((counter) => counter + 10); // update is queued, counter === num + 2, counter = previouscounter + 10
    // Here for each setState call, it uses the prior result and then updates the state to the new value    // counter will be num + 10 + 10 + 10 OR num + 30
  };

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <div>
        <button type="button" onClick={firstCallback}>
          Increment counter
        </button>
        Example of functional state update
      </div>
      <div>
        <button type="button" onClick={secondCallback}>
          Increment counter
        </button>
        Example of useCallback with dependency of state to re-enclose state back
      </div>
      <div>
        <button type="button" onClick={thirdCallback}>
          Increment counter
        </button>
        Example of useCallback without any dependency. This is a standard state update and thus it is a stale state, which would always start from 100
      </div>
      <div>
        <button type="button" onClick={fourthCallback}>
          Increment counter
        </button>
        Example of useCallback without dependency. This is a functional update and thus it ensures that the state is not stale.
      </div>
      <div><button type="button" onClick={fifthcallback}>
        +10 via the normal state update
      </button>
      </div>
      <div>
        <button type="button" onClick={sixthcallback}>
          +10 via the functional state update
        </button>
      </div>
    </div>
  );
}