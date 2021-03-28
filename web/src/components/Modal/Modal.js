import React, {useContext} from 'react';

import modalContext from '../../context/modalContext/modalContext';

import './styles/modal.css';

const Modal = ({setModal, modal}) => {
  const modalState = useContext(modalContext);
  // const {dispatchModal} = modalState;

  const hideModal = () => {
    setModal(false);
  };

  return (
    <div className="modal-blur">
      <div className="modal-container">
        <div className="modal-description">{modalState.state.description}</div>
        {modalState.state.data.media.map((m, index) => (
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
      </div>
    </div>
  );
};

export default Modal;
