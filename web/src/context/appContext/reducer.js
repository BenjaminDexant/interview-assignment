const reducer = (state, action) => {
	switch (action.type) {
		case "setImpacter": {
			return { ...state, impacterId: action.payload };
		}
		default:
			return state;
	}
};

export default reducer;
