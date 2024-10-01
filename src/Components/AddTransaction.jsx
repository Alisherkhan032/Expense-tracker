import { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const AddTransaction = () => {
  const {addTransaction, transactions} = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  function handleSubmit(e){
    e.preventDefault();
    let newTransaction = {
      id : transactions.length + 1,
      text : text,
      amount : +amount // or use parseInt as amount is string
    }

    addTransaction(newTransaction)
  }
  return (
    <>
      <h3>Add new transaction</h3>

      <form onSubmit={handleSubmit}>
        <div className="htmlForm-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="htmlForm-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
