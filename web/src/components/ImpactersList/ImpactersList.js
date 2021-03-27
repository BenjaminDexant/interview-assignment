import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Impacters from './Impacters';

import './styles/ImpactersList.css';

const proxy = 'http://localhost:3001';

const ImpactersList = () => {
  const [impactersList, setImpactersList] = useState([]);
  useEffect(() => {
    axios
      .get(`${proxy}/impacters`)
      .then((res) => res.data)
      .then((data) => setImpactersList(data));
  }, []);

  return (
    <div className="impactersList-container">
      {impactersList.map((data, index) => (
        <Impacters
          id={data.id}
          name={data.name}
          key={index}
        />
      ))}
    </div>
  );
};

export default ImpactersList;
