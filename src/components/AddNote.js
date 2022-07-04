import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

const AddNote = ({ onSubmit }) => {
	const [title, setTitle] = useState("");
	const [text, setText] = useState("");

	const pathName = window.location.pathname;
	localStorage.setItem("pathName", JSON.stringify(pathName));

	const navigate = useNavigate();

	const currentdate = new Date();
	const date =
		currentdate.getDate() +
		"/" +
		(currentdate.getMonth() + 1) +
		"/" +
		currentdate.getFullYear();
	const time =
		currentdate.getHours() +
		":" +
		currentdate.getMinutes() +
		":" +
		currentdate.getSeconds();

	const onTitleInputChange = e => {
		setTitle(e.target.value);
	};

	const onTextareaChange = e => {
		setText(e.target.value);
	};

	const onFormSubmit = e => {
		e.preventDefault();

		const newNote = {
			id: uuid(),
			title,
			text,
			date,
			time,
		};
		onSubmit(newNote);

		navigate("/");
	};

	return (
		<div>
			<form
				id="add-note"
				className="bg-white rounded flex flex-col"
				onSubmit={onFormSubmit}
			>
				<div className="mb-4">
					<input
						className="appearance-none text-xl border-b-2 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-400"
						type="text"
						id="title"
						required
						autoFocus
						value={title}
						placeholder="Enter Note Title"
						onChange={onTitleInputChange}
					/>
				</div>
				<div>
					<textarea
						className="resize-none appearance-none border-t-2 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-400 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100"
						style={{ height: "500px" }}
						type="text"
						id="text"
						required
						value={text}
						placeholder="Enter Note Text"
						onChange={onTextareaChange}
					/>
				</div>
			</form>
		</div>
	);
};

AddNote.propTypes = {
	onSubmit: PropTypes.func,
	title: PropTypes.string,
	text: PropTypes.string,
	pathName: PropTypes.string,
	navigate: PropTypes.object,
	onTitleInputChange: PropTypes.object,
	onTextareaChange: PropTypes.object,
	onFormSubmit: PropTypes.object,
	newNote: PropTypes.object,
};

export default AddNote;
