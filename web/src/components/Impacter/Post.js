import React, {useContext} from 'react';

import modalContext from '../../context/modalContext/modalContext';

import './styles/Post.css';

const Post = ({id, type, description, impacter_id, data, setModal, modal}) => {
  const modalState = useContext(modalContext);
  const {dispatchModal} = modalState;

  const showModal = () => {
    dispatchModal({
      type: 'setModal',
      id,
      payload: type,
      description,
      impacter_id,
      data,
    });
    setModal(true);
  };
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
          <div className="post-descriptionMedia">
            {m.description} - {m.version}
          </div>
        </div>
      ))}
      <button
        className="post-modalButton"
        name="modal"
        type="button"
        onClick={() => showModal()}>
        Voir
      </button>
    </div>
  );
};

export default Post;
