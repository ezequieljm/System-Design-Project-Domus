import React from "react";
import RentalPayment from "./RentalPayment/RentalPayment";
import SalePayment from "./SalePayment/SalePayment";
import CashDeskClosing from './CashDeskClosing/CashDeskClosing';

export default function Payments({ selectedIndex }) {
	return (
		<>
			{selectedIndex === 0 && <RentalPayment />}
			{selectedIndex === 1 && <SalePayment />}
			{selectedIndex === 2 && <CashDeskClosing />}
		</>
	);
}
