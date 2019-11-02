import React from "react";
import { voteAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteList = ({ store }) => {
	const anecdotes = store.getState();

	const vote = id => {
		store.dispatch(voteAnecdote(id));
	};

	return (
		<>
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
		</>
	);
};

export default AnecdoteList;