import React from 'react';

import './styles/Post.css';

const Post = ({id, type, description, impacter_id, data}) => {
  return (
    <div className="post-container">
      <div className="post-description">{description}</div>
      {data.media.map((m, index) => (
        <div key={index}>
          <img
            src={m.image}
            alt={`impacter ${m.description}`}
            className="post-img"
          />
          <div className="post-descriptionMedia">{m.description} - {m.version}</div>
        </div>
      ))}
    </div>
  );
};

export default Post;
