import React from "react";

export default function Cashier({ fnExit }) {
	return (
		<>
			<h1>Cajera</h1>
			<button onClick={fnExit}>Salir</button>
		</>
	);
}
