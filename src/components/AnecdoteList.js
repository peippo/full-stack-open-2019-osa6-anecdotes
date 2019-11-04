import React from "react";
import { connect } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { showVoteMessage, hideMessage } from "../reducers/notificationReducer";

let timer = null;

const AnecdoteList = ({
	visibleAnecdotes,
	voteAnecdote,
	showVoteMessage,
	hideMessage
}) => {
	const vote = anecdote => {
		voteAnecdote(anecdote);
		showVoteMessage(anecdote.content);

		clearTimeout(timer);
		timer = setTimeout(() => {
			hideMessage();
		}, 5000);
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
	showVoteMessage,
	hideMessage
};

const ConnectedAnecdoteList = connect(
	mapStateToProps,
	mapDispatchToProps
)(AnecdoteList);
export default ConnectedAnecdoteList;
