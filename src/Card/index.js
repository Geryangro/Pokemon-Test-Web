import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./style.scss";

const Card = props => {
  const data = {
    name: props.data.pokemon.name,
    url: props.data.pokemon.url
  };

  return (
    <Link to={`/${data.name}`}>
      <div className="card-pokemon text-center">
        <h2 className="capitalize">{data.name}</h2>
      </div>
    </Link>
  );
};

Card.defaultPropTypes = {
  data: {},
  name: ""
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
  name: PropTypes.string
};

export default Card;
