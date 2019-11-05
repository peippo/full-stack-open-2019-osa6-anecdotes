import React from "react";
import { connect } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { showNotification } from "../reducers/notificationReducer";

const AnecdoteList = ({ visibleAnecdotes, voteAnecdote, showNotification }) => {
	const vote = anecdote => {
		voteAnecdote(anecdote);
		showNotification(`You voted "${anecdote.content}"`, 5);
	};

	return (
		<>
			{visibleAnecdotes.map(anecdote => (
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

const filterAnecdotes = ({ anecdotes, filter }) => {
	return anecdotes
		.filter(anecdote =>
			anecdote.content.toLowerCase().includes(filter.toLowerCase())
		)
		.sort(function(a, b) {
			return b.votes - a.votes;
		});
};

const mapStateToProps = state => {
	return {
		visibleAnecdotes: filterAnecdotes(state)
	};
};

const mapDispatchToProps = {
	voteAnecdote,
	showNotification
};

const ConnectedAnecdoteList = connect(
	mapStateToProps,
	mapDispatchToProps
)(AnecdoteList);
export default ConnectedAnecdoteList;
