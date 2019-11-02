import React from "react";
import { createAnecdote } from "../reducers/anecdoteReducer";
import {
	showCreateMessage,
	hideMessage
} from "../reducers/notificationReducer";

let timer = null;

const AnecdoteForm = ({ store }) => {
	const addAnecdote = event => {
		event.preventDefault();
		const content = event.target.anecdote.value;
		event.target.anecdote.value = "";
		store.dispatch(createAnecdote(content));
		store.dispatch(showCreateMessage(content));

		clearTimeout(timer);
		timer = setTimeout(() => {
			store.dispatch(hideMessage());
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

export default AnecdoteForm;
