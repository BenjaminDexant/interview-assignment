import React, {useContext} from 'react';

import appContext from '../../context/appContext/appContext';

import './styles/Impacters.css';

const Impacters = ({id, name}) => {
  const appState = useContext(appContext);
  const {dispatch} = appState;

  let a;
  if (appState.state) {
    if (appState.state.impacterId) {
      a = appState.state.impacterId;
    }
  }

  const handleClick = (id) => {
    dispatch({
      type: 'setImpacter',
      payload: id,
    });
  };

  return (
    <button
      className={id === a ? 'impacter-button current-value' : 'impacter-button'}
      name="impacter"
      type="button"
      onClick={() => handleClick(id)}>
      {name}
    </button>
  );
};

export default Impacters;
