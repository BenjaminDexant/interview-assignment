import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';

import './styles/modal.css';

const proxy = 'http://localhost:3001';

const Modal = ({setModal, modal, posts, modalIndex, setModalIndex}) => {
  const {register, handleSubmit} = useForm();
  const [modifyWindow, setModifyWindow] = useState(false);

  const modifyPost = (data) => {
    const {type, description} = data;
    axios
      .put(`${proxy}/posts/${posts[modalIndex].id}`, {
        type,
        description,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const hideModal = () => {
    setModal(false);
  };

  const nextPost = (index) => {
    const newIndex = index + 1;
    if (newIndex < posts.length) {
      setModalIndex(newIndex);
    }
  };
  const previousPost = (index) => {
    const newIndex = index - 1;
    if (newIndex >= 0) {
      setModalIndex(newIndex);
    }
  };

  return (
    <div className="modal-blur">
      <div className="modal-container">
        <div className="modal-description">{posts[modalIndex].description}</div>
        {posts[modalIndex].data.media.map((m, index) => (
          <div key={index}>
            <img
              src={m.image}
              alt={`impacter ${m.description}`}
              className="modal-img"
            />
            <div className="modal-descriptionMedia">
              {m.description} - {m.version}
            </div>
          </div>
        ))}
        <button
          className="modal-closeButton"
          name="close"
          type="button"
          onClick={() => hideModal()}>
          Close
        </button>
        <button
          className="modal-previousButton"
          name="previous"
          type="button"
          onClick={() => previousPost(modalIndex)}>
          Previous
        </button>
        <button
          className="modal-nextButton"
          name="next"
          type="button"
          onClick={() => nextPost(modalIndex)}>
          Next
        </button>
        <button
          className="modal-modifyButton"
          name="modify"
          type="button"
          onClick={() => setModifyWindow(true)}>
          Modify
        </button>
        {modifyWindow ? (
          <form onSubmit={handleSubmit(modifyPost)}>
            <input name="type" ref={register} placeholder="Type" />
            <input
              name="description"
              ref={register}
              placeholder="Description"
            />
            <input type="submit" value="Modify now!" />
          </form>
        ) : null}
      </div>
    </div>
  );
};

export default Modal;
