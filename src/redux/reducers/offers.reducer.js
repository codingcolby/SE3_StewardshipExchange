const offers = (state = {}, action) => {
	switch (action.type) {
		case "SET_OFFERS":
			return action.payload;
		default:
			return state;
	}
};

export default offers;
