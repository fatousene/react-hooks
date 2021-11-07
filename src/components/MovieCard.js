import React from 'react';
import PropTypes from 'prop-types';
import Rate from './Rate';
import '../App.css';

const MovieCard = ({ movie: { title, posterUrl, description, rate } }) => {
  return (
    <div>
        <div id="div">
       <h1>{title}</h1>
        <p>{description}</p>
        <img src={posterUrl} alt=""/>
       <h1 id="h1"> <Rate rating={rate} /></h1>
       </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;