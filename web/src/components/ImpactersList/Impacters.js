import React, { useContext } from 'react';

import appContext from "../../context/appContext/appContext";

import './styles/Impacters.css';

const Impacters = ({id, name}) => {
    const appState = useContext(appContext);
	const { dispatch } = appState;

    const handleClick = id => {
        dispatch({
			type: "setImpacter",
			payload: id,
		});
    };

    console.log("CONTEXT", appState.state)
    
  return (
    <button
      className="Impacter-button"
      name="impacter"
      type="button"
      onClick={() => handleClick(id)}>
      {name}
    </button>
  );
};

export default Impacters;
