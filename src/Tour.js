import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name}></img>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        {/* if readMore is not true only display truncated text using substring */}
        <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
        {/* toggle readMore */}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "show less" : "read more"}
        </button>
        {/* remove this tour */}
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
