import anecdoteService from "../services/anecdotes";

export const voteAnecdote = anecdote => {
	return async dispatch => {
		const updatedAnecdote = await anecdoteService.addVote(anecdote);
		dispatch({
			type: "VOTE",
			data: updatedAnecdote
		});
	};
};

export const createAnecdote = content => {
	return async dispatch => {
		const newAnecdote = await anecdoteService.createNew(content);
		dispatch({
			type: "NEW_ANECDOTE",
			data: newAnecdote
		});
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
