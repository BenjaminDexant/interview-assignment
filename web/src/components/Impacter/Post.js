import React from 'react';

import './styles/Post.css';

const Post = ({id, type, description, impacter_id, data}) => {
  return (
    <div className="post-container">
      <div className="post-description">{description}</div>
      {data.media.map((m, index) => (
        <div key={m.id}>
          <img
            src={m.image}
            alt={`impacter ${m.id}`}
            className="impacterResume-img"
          />
          <div className="post-descriptionMedia">{m.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Post;
