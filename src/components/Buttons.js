import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate, Link } from "react-router-dom";

const Buttons = () => {
	const [id, setId] = useState("");

	const pathName = window.location.pathname;
	localStorage.setItem("pathName", JSON.stringify(pathName));

	const path = JSON.parse(localStorage.getItem("pathName"));

	const navigate = useNavigate();

	const cancelNoteCreation = () => {
		navigate("/");
	};

	setTimeout(() => {
		const id = JSON.parse(localStorage.getItem("currentId"));
		setId(id);
	}, 1);

	const handleButtonDisplay = () => {
		if (path === "/add") {
			return (
				<div>
					<button
						form="add-note"
						type="submit"
						className="mr-4 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
					>
						Create Note
					</button>
					<button
						onClick={cancelNoteCreation}
						type="submit"
						className="mr-4 inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
					>
						Cancel
					</button>
				</div>
			);
		}
		if (path === `/edit/${id}`) {
			return (
				<div>
					<Link to={"/details"}>
						<label
							for="my-modal"
							class="mr-4 btn inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
						>
							Details
						</label>
					</Link>
					<button
						form="edit-note"
						type="submit"
						className="mr-4 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out "
					>
						Edit Note
					</button>
					<button
						onClick={cancelNoteCreation}
						type="submit"
						className="mr-4 inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
					>
						Cancel
					</button>
				</div>
			);
		}
	};

	return <div>{handleButtonDisplay()}</div>;
};

Buttons.propTypes = {
	id: PropTypes.string,
	pathName: PropTypes.array,
	path: PropTypes.string,
	navigate: PropTypes.object,
	cancelNoteCreation: PropTypes.func,
	setTimeout: PropTypes.func,
	handleButtonDisplay: PropTypes.func,
};

export default Buttons;
