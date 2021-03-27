import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';

import Post from './Post';

import appContext from '../../context/appContext/appContext';

import './styles/ImpacterPosts.css';

const proxy = 'http://localhost:3001';

const ImpacterPosts = () => {
  const appState = useContext(appContext);

  let a = '';
  if (appState.state) {
    if (appState.state.impacterId) {
      a = appState.state.impacterId;
    }
  }

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${proxy}/impacters/${a}/posts`)
      .then((res) => res.data)
      .then((data) => setPosts(data));
  }, [a]);

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
        />
      ))}
    </div>
  );
};

export default ImpacterPosts;
