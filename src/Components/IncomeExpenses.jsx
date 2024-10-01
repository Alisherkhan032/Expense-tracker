import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  // amount
  const amounts = transactions.map((item) => item.amount); 

  //income
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, curr) => {
      return acc += curr;
    }, 0).toFixed(2);
  
  //expense
  const expense = amounts
  .filter((item) => item < 0)
  .reduce((acc, curr) => {
    return acc += curr;
  }, 0).toFixed(2); 

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+₹{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-₹{expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
