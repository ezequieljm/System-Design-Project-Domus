import React from "react";
import ClientsReports from "./ClientsReports/ClientsReports";
import PropertiesReports from "./PropertiesReports/PropertiesReports";
import SaleReports from "./SaleReports/SaleReports";
import RentalReports from "./RentalReports/RentalReports";

export default function RealEstate({ selectedIndex }) {
	return (
		<>
			{selectedIndex === 0 && <SaleReports />}
			{selectedIndex === 1 && <RentalReports />}
			{selectedIndex === 2 && <ClientsReports />}
			{selectedIndex === 3 && <PropertiesReports />}
			{selectedIndex > 3 && <h1>Herramientas de la página</h1>}
		</>
	);
}
