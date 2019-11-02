import React from "react";

const App = props => {
	const anecdotes = props.store.getState();
	const store = props.store;

	const vote = id => {
		store.dispatch({
			type: "VOTE",
			data: {
				id
			}
		});
	};

	const addAnecdote = event => {
		event.preventDefault();
		const content = event.target.anecdote.value;
		store.dispatch({
			type: "NEW_ANECDOTE",
			data: {
				content
			}
		});
	};

	return (
		<div>
			<h2>Anecdotes</h2>
			{anecdotes
				.sort(function(a, b) {
					return b.votes - a.votes;
				})
				.map(anecdote => (
					<div key={anecdote.id}>
						<div>{anecdote.content}</div>
						<div>
							has {anecdote.votes}
							<button onClick={() => vote(anecdote.id)}>
								vote
							</button>
						</div>
					</div>
				))}
			<h2>create new</h2>
			<form onSubmit={addAnecdote}>
				<div>
					<input name="anecdote" />
				</div>
				<button type="submit">create</button>
			</form>
		</div>
	);
};

export default App;
