import React from "react";
import { connect } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import {
	showCreateMessage,
	hideMessage
} from "../reducers/notificationReducer";

let timer = null;

const AnecdoteForm = ({ createAnecdote, showCreateMessage, hideMessage }) => {
	const addAnecdote = async event => {
		event.preventDefault();
		const content = event.target.anecdote.value;
		event.target.anecdote.value = "";
		createAnecdote(content);
		showCreateMessage(content);

		clearTimeout(timer);
		timer = setTimeout(() => {
			hideMessage();
		}, 5000);
	};

	return (
		<>
			<h2>create new</h2>
			<form onSubmit={addAnecdote}>
				<div>
					<input name="anecdote" />
				</div>
				<button type="submit">create</button>
			</form>
		</>
	);
};

const mapDispatchToProps = {
	createAnecdote,
	showCreateMessage,
	hideMessage
};

const ConnectedAnecdoteForm = connect(
	null,
	mapDispatchToProps
)(AnecdoteForm);
export default ConnectedAnecdoteForm;
