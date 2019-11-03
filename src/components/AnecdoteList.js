import React from "react";
import { connect } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { showVoteMessage, hideMessage } from "../reducers/notificationReducer";

let timer = null;

const AnecdoteList = ({ anecdotes, filter }) => {
	const vote = anecdote => {
		//store.dispatch(voteAnecdote(anecdote.id));
		//store.dispatch(showVoteMessage(anecdote.content));

		clearTimeout(timer);
		timer = setTimeout(() => {
			//store.dispatch(hideMessage());
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

const mapStateToProps = state => {
	return {
		anecdotes: state.anecdotes,
		filter: state.filter
	};
};

const ConnectedAnecdoteList = connect(mapStateToProps)(AnecdoteList);
export default ConnectedAnecdoteList;
