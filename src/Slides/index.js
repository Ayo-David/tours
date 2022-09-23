import React from 'react';
import './SlideApp.css';
//import 'h8k-components';

import Slides from './Slides-new';
const title = "Slideshow App";

const slides = [
  {
    title: "Today's workout plan",
    text: "We're gonna do 3 fundamental exercises."
  },
  {
    title: "First, 10 push-ups",
    text: "Do 10 reps. Remember about full range of motion. Don't rush."
  },
  {
    title: "Next, 20 squats",
    text: "Squats are important. Remember to keep your back straight."
  },
  {
    title: "Finally, 15 sit-ups",
    text: "Slightly bend your knees. Remember about full range of motion."
  },
  {
    title: "Great job!",
    text: "You made it, have a nice day and see you next time!"
  }
];


function App() {
  return (
    <div>
      <div>{title}</div>
      <div className="App">
        <Slides slides={slides} />
      </div>
    </div>
  );
}

export default App;