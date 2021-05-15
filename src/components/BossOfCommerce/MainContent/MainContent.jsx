import React from "react";
import Schedule from "./Schedule/Schedule";
import Clients from "./Clients/Clients";
import Properties from "./Properties/Properties";
import Reports from "./Reports/Reports";

const MainContent = ({ val, inxTool }) => {
	return (
		<>
      {val === 3 ? (
        <Properties />
      ) : val === 2 ? (
				<Clients />
			) : val === 1 ? (
				<Reports />
			) : (
        <Schedule />
				// <Clients inxTool={inxTool} />
			)}
		</>
	);
};

export default MainContent