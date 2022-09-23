import React, { useState } from 'react';
import './App.css';
//import 'h8k-components';

import Articles from './Articles';

const title = "Sorting Articles";

const articles = [
  {
    title: "A message to our customers",
    upvotes: 12,
    date: "2020-01-24",
  },
  {
    title: "Alphabet earnings",
    upvotes: 22,
    date: "2019-11-23",
  },
  {
    title: "Artificial Mountains",
    upvotes: 2,
    date: "2019-11-22",
  },
  {
    title: "Scaling to 100k Users",
    upvotes: 72,
    date: "2019-01-21",
  },
  {
    title: "the Emu War",
    upvotes: 24,
    date: "2019-10-21",
  },
  {
    title: "What's SAP",
    upvotes: 1,
    date: "2019-11-21",
  },
  {
    title: "Simple text editor has 15k monthly users",
    upvotes: 7,
    date: "2010-12-31",
  },
];


function App() {

  const [sorted, setSorted] = useState(articles)

  const handleUpvotes = () => {
    const upVotes = sorted.sort((a, b) => b.upvotes - a.upvotes)
    //console.log(`upVotes sorting = `, upVotes)
    setSorted([...upVotes])
  }

  const handleRecent = () => {
    const recent = sorted.sort((a, b) => {
      const date1 = new Date(a.date)
      const date2 = new Date(b.date)
      return date2 - date1
    })
    setSorted([...recent])
  }

  return (
    <div className="App">
      <div header={title}></div>
      <div id="navigation" >
        <label >Sort By</label>
        <button data-testid="most-upvoted-link" onClick={handleUpvotes}>Most Upvoted</button>
        <button data-testid="most-recent-link" onClick={handleRecent}>Most Recent</button>
      </div>
      <Articles articles={sorted} />
    </div>
  );

}

export default App;
