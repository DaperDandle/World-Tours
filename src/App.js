import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    // filter tours by id to remove the current tour
    const newTours = tours.filter((tour) => tour.id !== id);
    // set the tours to the filtered tour list
    setTours(newTours);
  };

  const fetchTours = async () => {
    // use fetch api to get tours from external api
    try {
      const resp = await fetch(url);
      const tours = await resp.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // fetch tours on page load
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  // return for when tours are empty
  if (tours.length === 0) {
    return (
      <main>
        <div>
          <h2>No Tours Left</h2>
        </div>
        <button className="btn" onClick={fetchTours}>
          Reset Tours
        </button>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
