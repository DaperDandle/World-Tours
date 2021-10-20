import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
      </div>
      <div className="underline"></div>
      <div>
        {/* map through tours and display them, spread operator to get all props from tour, pass down remove tour function */}
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
