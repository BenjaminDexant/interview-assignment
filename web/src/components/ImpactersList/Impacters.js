import React from 'react';

import './styles/Impacters.css';

const Impacters = ({id, name, handleClick}) => {
  return (
    <button
      className="Impacter-button"
      name="impacter"
      type="button">
      {name}
    </button>
  );
};

export default Impacters;
