import TransactionHistory from "../features/transactions/TransactionHistory";
import Transactions from "../features/transactions/Transactions";

import { Provider } from "react-redux";

import "./app.css";

import { store } from "./store";

// TODO: Import the Redux store and provide it to this component using <Provider>.
const App = () => {
  return (
    <main>
      <h1>Bank Account</h1>
      <Transactions />
      <TransactionHistory />
    </main>
  );
};

export default App;

