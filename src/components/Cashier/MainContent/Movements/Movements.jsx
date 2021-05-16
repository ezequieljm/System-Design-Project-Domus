import React from "react";
import InputOutput from "./Transactions/InputOutput";
import TransactionsCash from './Transactions/TransactionsCash';

export default function Movements({ selectedIndex }) {
	return (
		<>
      {selectedIndex === 0 && <InputOutput /> }
      {selectedIndex === 1 && <TransactionsCash /> }
		</>
	);
}
