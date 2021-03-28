const reducer = (state, action) => {
	switch (action.type) {
		case "setModal": {
			return { ...state, id: action.id, type: action.payload, description: action.description, data: action.data };
		}
		default:
			return state;
	}
};

export default reducer;
