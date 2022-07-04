import React from "react";
import PropTypes from "prop-types";

const Details = () => {
	const selectedNote = JSON.parse(localStorage.getItem("selectedNote"));

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

Details.propTypes = {
	selectedNote: PropTypes.object,
};

export default Details;
