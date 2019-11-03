import React from "react";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { showVoteMessage, hideMessage } from "../reducers/notificationReducer";

let timer = null;

const AnecdoteList = ({ store }) => {
	const anecdotes = store.getState().anecdotes;
	const filter = store.getState().filter;

	const vote = anecdote => {
		store.dispatch(voteAnecdote(anecdote.id));
		store.dispatch(showVoteMessage(anecdote.content));

		clearTimeout(timer);
		timer = setTimeout(() => {
			store.dispatch(hideMessage());
		}, 5000);
	};

	return (
		<>
			{anecdotes
				.filter(anecdote => anecdote.content.includes(filter))
				.sort(function(a, b) {
					return b.votes - a.votes;
				})
				.map(anecdote => (
					<div key={anecdote.id}>
						<div>{anecdote.content}</div>
						<div>
							has {anecdote.votes}
							<button onClick={() => vote(anecdote)}>vote</button>
						</div>
					</div>
				))}
		</>
	);
};

export default AnecdoteList;
