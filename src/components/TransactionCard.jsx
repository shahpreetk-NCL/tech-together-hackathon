import React from "react";
import axios from "axios";

const TransactionCard = () => {
  // get all account id of a customer
  const accounts = JSON.parse(localStorage.getItem("accounts"));
  const deposits = [];
  const withdrawals = [];
console.log({accounts})

  // get all deposits of an account
  React.useEffect(() => {
    accounts.forEach((account) => {
      axios
        .get(
          `http://api.nessieisreal.com/accounts/${account._id}/deposits?key=${import.meta.env.VITE_API_KEY
          }`
        )
        .then((response) => {
          deposits.push(response.data);
        });

      axios
        .get(
          `http://api.nessieisreal.com/accounts/${account._id
          }/withdrawals?key=${import.meta.env.VITE_API_KEY}`
        )
        .then((response) => {
          withdrawals.push(response.data);
        });
    });
  }, [accounts, deposits, withdrawals]);

  console.log({ deposits });

  const flattenedDeposits = deposits.flat()
  const flattenedWithdrawals = withdrawals.flat()

  console.log({ flattenedDeposits });

  const mergedTransactions = [
    ...flattenedDeposits,
    ...flattenedWithdrawals,
  ].sort((a, b) => {
    return new Date(b.transaction_date) - new Date(a.transaction_date);
  });

  console.log({ mergedTransactions });

  return (
    <div className="m-4 p-4 bg-slate-950">
      <h1 className="text-2xl my-4 text-slate-300">Transactions</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionCard;
