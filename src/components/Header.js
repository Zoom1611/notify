import React from "react";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";

const Header = () => {
	return (
		<div className="grid grid-cols-3 border-b-2 grid-rows-1 h-16 bg-gradient-to-l from-indigo-100">
			<div className="border-r-2 p-5 flex flex-row justify-between items-center ">
				<span className="text-xl">All Notes</span>
				<Link to={"/add"}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-7 w-7 text-gray-400 hover:text-green-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={1.5}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
						/>
					</svg>
				</Link>
			</div>
			<div className="col-span-2 p-5 flex justify-end items-center p-5">
				<Buttons />
			</div>
		</div>
	);
};

export default Header;
