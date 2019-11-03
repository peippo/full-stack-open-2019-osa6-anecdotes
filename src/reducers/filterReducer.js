const initialState = "";

const filterReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CHANGE_FILTER":
			return action.data.term;
		case "HIDE_MESSAGE":
			return "";
		default:
			return state;
	}
};

export const changeFilter = term => {
	return {
		type: "CHANGE_FILTER",
		data: {
			term
		}
	};
};

export const clearFilter = () => {
	return {
		type: "CLEAR_FILTER"
	};
};

export default filterReducer;
