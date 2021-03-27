import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './styles/ImpactersList.css';

const proxy = 'http://localhost:3001';

const ImpactyersList = () => {
  const [impactersList, setImpactersList] = useState([]);
  useEffect(() => {
    axios
      .get(`${proxy}/impacters`)
      .then((res) => res.data)
      .then((data) => setImpactersList(data));
  }, []);

  console.log(impactersList);
  return <div>Hello Assignement</div>;
};

export default ImpactyersList;
