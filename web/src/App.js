import React, {useState} from 'react';

import ImpactersList from './components/ImpactersList/ImpactersList';
import ImpacterResume from './components/Impacter/ImpacterResume';
import ImpacterPosts from './components/Impacter/ImpacterPosts';
import MenuBurger from './components/header/MenuBurger';
import Modal from './components/modal/Modal';

import './App.css';

import burgerIcon from './icon/liste.svg';
import closeIcon from './icon/close.svg';

const App = () => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  return (
    <div className="App">
      <div className="header">
        <div className="header-menuBurger" onClick={() => setOpen(!open)}>
          {open ? (
            <img
              src={closeIcon}
              alt="close menu"
              className="header-menuBurgerIcon"
            />
          ) : (
            <img
              src={burgerIcon}
              alt="menu"
              className="header-menuBurgerIcon"
            />
          )}
        </div>
        {open ? (
          <div className="menuBurger">
            <MenuBurger open={open} setOpen={setOpen} />
          </div>
        ) : null}
      </div>
      <div className="body">
        <div className="impactersList">
          <ImpactersList />
        </div>
        <div className="impacter">
          <ImpacterResume className="impacterResume" />
          <ImpacterPosts className="impacterPosts" setModal={setModal} modal={modal} />
        </div>
      </div>
      {modal ? <Modal setModal={setModal} modal={modal} /> : null}
      <div className="footer" />
    </div>
  );
};

export default App;
