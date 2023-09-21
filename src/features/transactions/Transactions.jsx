import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { deposit, withdrawal, transfer } from "./transactionsSlice";

import "./transactions.scss";

/**
 * Allows users to deposit to, withdraw from, and transfer money from their account.
 */
export default function Transactions() {
  const balance = useSelector((state) => {
    return state.transactions.balance;
  });
  // TODO: Get the balance from the Redux store using the useSelector hook

  const [amountStr, setAmountStr] = useState("0.00");
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  /** Dispatches a transaction action based on the form submission. */
  const onTransaction = (e) => {
    e.preventDefault();

    // This changes depending on which button the user clicked to submit the form.
    // It will be either "deposit", "withdraw", or "transfer".
    const action = e.nativeEvent.submitter.name;

    const amount = +amountStr;

    // TODO: Dispatch the appropriate transaction action based on `action`
    switch (action) {
      case 'deposit':
        dispatch(deposit({ amount }));
        break;
      case 'withdraw':
          dispatch(withdrawal({ amount} ));
        break;
      case 'transfer':
        dispatch(transfer({amount, name }))
        break;
    }

    /* following below is another way to write instead of "switch"
      if (action === 'deposit') {

      } else if (action === 'withdraw') {

      } else if (action === 'transfer') {

      } */
  };

  return (
    <section className="transactions container">
      <h2>Transactions</h2>
      <figure>
        <figcaption>Current Balance &nbsp;</figcaption>
        <strong>${balance.toFixed(2)}</strong>
      </figure>
      <form onSubmit={onTransaction}>
        <div className="form-row">
          <label>
            Amount
            <input
              type="number"
              inputMode="decimal"
              min={0}
              step="0.01"
              value={amountStr}
              onChange={(e) => setAmountStr(e.target.value)}
            />
          </label>
          <div>
            <button default name="deposit">
              Deposit
            </button>
            <button name="withdraw">Withdraw</button>
          </div>
        </div>
        <div className="form-row">
          <label>
            Transfer to
            <input 
            value={name} 
            onChange={(ev) => setName(ev.target.value)}
            type="text" 
            placeholder="Recipient Name" 
            name="recipient" 
            />
          </label>
          <button name="transfer">Transfer</button>
        </div>
      </form>
    </section>
  );
}
