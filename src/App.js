import { useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const handleDelete = (id) => {
    setTours(tours.filter((tour) => {
      return tour.id !== id
    }))
    //tours.slice(i,1)
  }

  const fetchTours = async () => {

    try {
      const response = await fetch(url)
      const mytours = await response.json()
      //console.log(tours)
      setTours(mytours)

    } catch (error) {
      console.log(error)
    }




  }

  useEffect(() => {
    fetchTours()
    setLoading(false)
    console.log(tours)
  }, [])

  return (
    <div className="App">
      {
        loading ? <Loading /> : (<main><Tours tours={tours} handleDelete={handleDelete} fetchTours={fetchTours} /></main>)
      }
    </div>
  );
}

export default App;
