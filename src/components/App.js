import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PropTypes from "prop-types";
import AddNote from "./AddNote";
import NoteList from "./NoteList";
import EditNote from "./EditNote";
import Details from "./Details";
import Header from "./Header";
import notify from "../images/notify.jpg";

const App = () => {
	const [notes, setNotes] = useState([]);

	console.log(notes);

	const pathName = window.location.pathname;
	localStorage.setItem("pathName", JSON.stringify(pathName));

	useEffect(() => {
		const data = localStorage.getItem("notes");
		setNotes(JSON.parse(data));
	}, []);

	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	});

	const handleOnFormSubmit = newNote => {
		setNotes([...notes, newNote]);
	};

	const handleRemoveNote = id => {
		const deletedNote = notes.filter(object => {
			return object.id !== id;
		});

		setNotes([...deletedNote]);
	};

	const handleEditNote = selectedNote => {
		const updateNotes = notes.map(note => {
			if (note.id === selectedNote.id) {
				return selectedNote;
			}
			return note;
		});

		setNotes([...updateNotes]);
	};

	return (
		<BrowserRouter>
			<div>
				<Header />
			</div>

			<div className="h-3/4 h-full">
				<div className="p-5 float-left w-4/12 border-r-2 h-screen">
					<NoteList notes={notes} removeNote={handleRemoveNote} />
				</div>

				<div className="px-10 py-5 float-left w-8/12">
					<Routes>
						<Route
							path="/"
							element={
								<div className="flex justify-center items-center">
									<img src={notify} alt="Notify Logo" className="w-96 pt-7" />
								</div>
							}
						/>

						<Route
							path="/add"
							element={<AddNote onSubmit={handleOnFormSubmit} />}
						/>
						<Route
							path="/edit/:id"
							element={<EditNote notes={notes} editNote={handleEditNote} />}
						/>
						<Route path="/details" element={<Details notes={notes} />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
};

App.propTypes = {
	notes: PropTypes.array,
	pathName: PropTypes.string,
	handleOnFormSubmit: PropTypes.func,
	handleRemoveNote: PropTypes.func,
	handleEditNote: PropTypes.func,
};

export default App;
