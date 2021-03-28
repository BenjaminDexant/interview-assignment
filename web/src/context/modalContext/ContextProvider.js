/* eslint-disable require-jsdoc */
import React, { useReducer } from "react";
import modalContext from "./modalContext";
import reducer from "./reducer";

const { Provider } = modalContext;

const initialState = {};

const ContextProvider = ({ children }) => {
	const [state, dispatchModal] = useReducer(reducer, initialState);

	return <Provider value={{ state, dispatchModal }}>{children}</Provider>;
};

export default ContextProvider;
