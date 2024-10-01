import { GlobalContext } from "../Context/GlobalState";
import { useContext } from "react";
import Transaction from './Transaction'

const App = () => {
  const {transactions} = useContext(GlobalContext);
  console.log(transactions)
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction)=>(
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default App;
