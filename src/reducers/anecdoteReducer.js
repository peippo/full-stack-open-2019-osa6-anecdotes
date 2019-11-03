import anecdoteService from "../services/anecdotes";

export const voteAnecdote = id => {
	return {
		type: "VOTE",
		data: {
			id
		}
	};
};

export const createAnecdote = data => {
	return {
		type: "NEW_ANECDOTE",
		data
	};
};

export const initializeAnecdotes = () => {
	return async dispatch => {
		const anecdotes = await anecdoteService.getAll();
		dispatch({
			type: "INITIALIZE_ANECDOTES",
			data: anecdotes
		});
	};
};

const anecdoteReducer = (state = [], action) => {
	switch (action.type) {
		case "INITIALIZE_ANECDOTES":
			return action.data;
		case "VOTE":
			const id = action.data.id;
			const votedAnecdote = state.find(anecdote => anecdote.id === id);
			const modifiedAnecdote = {
				...votedAnecdote,
				votes: votedAnecdote.votes + 1
			};
			return state.map(anecdote =>
				anecdote.id !== id ? anecdote : modifiedAnecdote
			);
		case "NEW_ANECDOTE":
			return [...state, action.data];
		default:
			return state;
	}
};

export default anecdoteReducer;
