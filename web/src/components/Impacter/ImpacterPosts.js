import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';

import Post from './Post';

import appContext from '../../context/appContext/appContext';

import './styles/ImpacterPosts.css';

const proxy = 'http://localhost:3001';

const ImpacterPosts = ({setModal, modal}) => {
  const [render, setRender] = useState(false);
  const appState = useContext(appContext);

  let a;
  if (appState.state) {
    if (appState.state.impacterId) {
      a = appState.state.impacterId;
    }
  }

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (typeof a === 'string') {
      axios
        .get(`${proxy}/impacters/${a}/posts`)
        .then((res) => res.data)
        .then((data) => setPosts(data));
      setRender(true);
    }
    return () => {
      setRender(false);
    };
  }, [a]);

  if (render) {
    return (
      <div className="impacterPosts-container">
        {posts.map((data, index) => (
          <Post
            id={data.id}
            type={data.type}
            description={data.description}
            impacter_id={data.impacter_id}
            data={data.data}
            key={data.id}
            setModal={setModal}
            modal={modal}
            index={index}
          />
        ))}
      </div>
    );
  }
  return null;
};

export default ImpacterPosts;
