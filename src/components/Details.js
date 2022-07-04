import React from "react";

const Details = () => {
	const selectedNote = JSON.parse(localStorage.getItem("selectedNote"));
	console.log(selectedNote);

	return (
		<div>
			<p>
				Created: {selectedNote.date} {selectedNote.time}
			</p>
			<hr />
			<p className="mt-4 text-lg">
				Title:
				<br /> <strong>{selectedNote.title}</strong>
			</p>
			<hr />
			<p className="mt-4">
				Text: <br /> {selectedNote.text}
			</p>
		</div>
	);
};

export default Details;
