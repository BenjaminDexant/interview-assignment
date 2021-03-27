/* eslint-disable require-jsdoc */
import React, { useReducer } from "react";
import appContext from "./appContext";
import reducer from "./reducer";

const { Provider } = appContext;

const initialState = {};

const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export default ContextProvider;
