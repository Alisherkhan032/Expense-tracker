import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const Balance = () => {
    const {transactions} = useContext(GlobalContext)

    // amount array
    
    const amounts = transactions.map((item)=> item.amount); // [-20,30,100,-60]

    // calculating total amount

    let total = 0;
    amounts.forEach((item)=>{
        total += item
    })

    total = total.toFixed(2);

    return ( 
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">₹{total}</h1>
        </>
     );
}
 
export default Balance;