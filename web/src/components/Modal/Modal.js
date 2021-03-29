import React from 'react';

import './styles/modal.css';

const Modal = ({setModal, modal, posts, modalIndex, setModalIndex}) => {
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
      </div>
    </div>
  );
};

export default Modal;
