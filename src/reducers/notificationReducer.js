const initialState = "";

const notificationReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SHOW_NOTIFICATION":
			return action.data.message;
		case "HIDE_NOTIFICATION":
			return "";
		default:
			return state;
	}
};

export const showNotification = (message, timeout = 5) => {
	return dispatch => {
		dispatch({
			type: "SHOW_NOTIFICATION",
			data: {
				message
			}
		});

		setTimeout(() => {
			dispatch({
				type: "HIDE_NOTIFICATION"
			});
		}, timeout * 1000);
	};
};

export default notificationReducer;
