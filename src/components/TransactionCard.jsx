/* eslint-disable react/prop-types */

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const TransactionCard = ({ transactions }) => {

  return (
    <div className="m-4 p-4 bg-slate-950 rounded-3xl">
      <h1 className="text-2xl my-4 text-slate-300">All Transactions</h1>
      <div className="overflow-x-auto overflow-y-auto h-96">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {transactions.map((trnc, i) =>
            (
              <tr key={i}>
                <th>{i+1}</th>
                <td className={classNames(trnc.status === "cancelled" ? "text-slate-400 line-through": "")}>{trnc.transaction_date}</td>
                <td
                  className={classNames(
                    trnc.status === "cancelled" ? "text-slate-400 line-through" :
                    trnc.type === "deposit" ? 'text-emerald-400' : 'text-rose-400',
                    'font-semibold'
                  )}
                >{trnc.type === "deposit" ? "+" : "-"}{trnc.amount}</td>
                <td className={classNames(trnc.status === "cancelled" ? "text-slate-400 line-through" : "")}>{trnc.status}</td>
                <td className={classNames(trnc.status === "cancelled" ? "text-slate-400 line-through" : "")}>{trnc.description}</td>
              </tr>
            )
            )}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionCard;
