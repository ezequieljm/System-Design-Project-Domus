import React from "react";
import Request from "./Requests/Requests";
import Schedule from "./Schedule/Schedule";
import Clients from "./Clients/Clients";

const MainContent = ({ val, inxTool }) => {
	return (
		<>
			{val === 2 ? (
				<Request />
			) : val === 1 ? (
				<Schedule valueListTools={inxTool} />
			) : (
				<Clients inxTool={inxTool} />
			)}
		</>
	);
};

export default MainContent;
