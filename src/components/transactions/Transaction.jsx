import PropTypes from "prop-types";
import css from "./Transaction.module.css";

export const Transaction = ({ type, amount, currency }) => {
  return (
    <tr className={css.transactionRow}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}