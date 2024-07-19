import { useDispatch, useSelector } from "react-redux";
import { selectBalance } from "../redux/selector";
import { deposit, withdraw } from "../redux/AccountSlice";

export const Account = () => {
  const balance = useSelector(selectBalance);
  const dispatch = useDispatch()
  return (
    <div>
      <p>counts: {balance}</p>
      <button type="button" onClick={() => dispatch(deposit(10))}>+10</button>
      <button type="button" onClick={() => dispatch(withdraw(10))}>-10</button>
    </div>
  );
};
