import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const NoteList = ({ notes, removeNote }) => {
	const navigate = useNavigate();

	console.log(notes);

	let renderNotes;
	if (notes.length) {
		renderNotes = notes.map(note => {
			return (
				<Link to={`/edit/${note.id}`} key={note.id}>
					<div className="border-b-2 rounded p-3 flex justify-between items-center mb-1 hover:bg-blue-100 active:bg-blue-400">
						<div>
							<p className="text-base text-ellipsis whitespace-nowrap overflow-hidden w-72">
								<strong>{note.title}</strong>
							</p>

							<p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden w-72">
								{note.text}
							</p>
						</div>

						<div>
							<div
								className=""
								onClick={e => {
									e.stopPropagation();
									e.preventDefault();
									deleteNote(note.id);
								}}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-7 w-7 cursor-pointer text-gray-400 hover:text-rose-500"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
						</div>
					</div>
				</Link>
			);
		});
	}

	const deleteNote = id => {
		removeNote(id);
		localStorage.setItem("currentId", JSON.stringify(""));
		navigate("/");
	};

	return (
		<div>
			{notes.length ? (
				<div
					className={
						"h-96 w-full scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 scrollbar-thumb-rounded" +
						(notes.length > 8
							? "overflow-hidden overflow-y-scroll"
							: "overflow-hidden")
					}
					style={{ height: "600px" }}
				>
					{renderNotes}
				</div>
			) : (
				<div className="pt-36">
					<div className="flex justify-center items-center flex-col">
						<div>Create your first note</div>
						<Link to="/add" className="mt-5">
							<button className="inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
								Create Note
							</button>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

NoteList.propTypes = {
	notes: PropTypes.array,
	removeNote: PropTypes.func,
	deleteNote: PropTypes.object,
	renderNotes: PropTypes.func,
};

export default NoteList;
