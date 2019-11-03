const getId = () => (100000 * Math.random()).toFixed(0);

export const voteAnecdote = id => {
	return {
		type: "VOTE",
		data: {
			id
		}
	};
};

export const createAnecdote = content => {
	return {
		type: "NEW_ANECDOTE",
		data: {
			content
		}
	};
};

export const initializeAnecdotes = anecdotes => {
	return {
		type: "INITIALIZE_ANECDOTES",
		data: anecdotes
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
			const newAnecdote = {
				content: action.data.content,
				id: getId(),
				votes: 0
			};
			return [...state, newAnecdote];
		default:
			return state;
	}
};

export default anecdoteReducer;
