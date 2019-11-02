const initialState = "";

const notificationReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SHOW_VOTE_MESSAGE":
			return `You voted ${action.data.message}`;
		case "SHOW_CREATE_MESSAGE":
			return `You created anecdote "${action.data.message}"`;
		case "HIDE_MESSAGE":
			return "";
		default:
			return state;
	}
};

export const showVoteMessage = message => {
	return {
		type: "SHOW_VOTE_MESSAGE",
		data: {
			message
		}
	};
};

export const showCreateMessage = message => {
	return {
		type: "SHOW_CREATE_MESSAGE",
		data: {
			message
		}
	};
};

export const hideMessage = () => {
	return {
		type: "HIDE_MESSAGE"
	};
};

export default notificationReducer;
