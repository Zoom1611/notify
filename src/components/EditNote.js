import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams, useNavigate } from "react-router-dom";

const EditNote = ({ notes, editNote }) => {
	const [selectedNote, setSelectedNote] = useState({
		id: "",
		title: "",
		text: "",
		date: "",
		time: "",
	});

	const pathName = window.location.pathname;
	localStorage.setItem("pathName", JSON.stringify(pathName));

	localStorage.setItem("selectedNote", JSON.stringify(selectedNote));

	const navigate = useNavigate();
	const { id } = useParams();
	const currentNoteId = id;

	useEffect(() => {
		const noteId = currentNoteId;
		const selectedNote = notes.find(note => note.id === noteId);
		localStorage.setItem("currentId", JSON.stringify(currentNoteId));
		setSelectedNote({ ...selectedNote });
	}, [currentNoteId, notes]);

	const onTitleInputChange = e => {
		setSelectedNote({ ...selectedNote, [e.target.name]: e.target.value });
	};

	const onTextareaChange = e => {
		setSelectedNote({ ...selectedNote, [e.target.name]: e.target.value });
	};

	const onSubmit = e => {
		e.preventDefault();
		editNote(selectedNote);
		localStorage.setItem("currentId", JSON.stringify(""));
		navigate("/");
	};

	return (
		<div>
			<form
				id="edit-note"
				className="bg-white rounded flex flex-col"
				onSubmit={onSubmit}
			>
				<div className="mb-4">
					<input
						className="appearance-none text-xl border-b-2 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-400 h-11"
						type="text"
						id="title"
						required
						autoFocus
						value={selectedNote.title}
						name="title"
						placeholder="Enter title"
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
						value={selectedNote.text}
						name="text"
						placeholder="Enter note text"
						onChange={onTextareaChange}
					/>
				</div>
			</form>
		</div>
	);
};

EditNote.propTypes = {
	selectedNote: PropTypes.object,
	pathName: PropTypes.string,
	navigate: PropTypes.object,
	currentNoteId: PropTypes.string,
	onTitleInputChange: PropTypes.object,
	onTextareaChange: PropTypes.object,
	onSubmit: PropTypes.object,
};

export default EditNote;
