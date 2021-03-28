import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';

import appContext from '../../context/appContext/appContext';

import './styles/ImpacterResume.css';

const proxy = 'http://localhost:3001';

const ImpacterResume = () => {
  const [render, setRender] = useState(false);
  const appState = useContext(appContext);

  let a;
  if (appState.state) {
    if (appState.state.impacterId) {
      a = appState.state.impacterId;
    }
  }

  const [impacter, setImpacter] = useState({});

  useEffect(() => {
    if (typeof a === 'string') {
      axios
        .get(`${proxy}/impacters/${a}`)
        .then((res) => res.data)
        .then((data) => setImpacter(data));
      setRender(true);
    }
    return () => {
      setRender(false);
    };
  }, [a]);

  if (render) {
    return (
      <div className="impacterResume-container">
        <div className="impacterResume-name">{impacter.name}</div>
        <img
          src={impacter.profile_image}
          alt={`impacter ${impacter.name}`}
          className="impacterResume-img"
        />
        <div className="impacterResume-bio">{impacter.bio}</div>
      </div>
    );
  }
  return null;
};

export default ImpacterResume;
