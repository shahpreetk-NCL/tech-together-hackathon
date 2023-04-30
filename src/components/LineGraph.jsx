/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import Plot from 'react-plotly.js';

const LineGraph = ({ transactions }) => {
  const [withdrawals, setWithdrawals] = React.useState([]);

  useEffect(() => {
    setWithdrawals(transactions.filter((transaction) => transaction.type === "withdrawal"))
  }, [transactions])

  return (
    <div className="flex m-4 p-4 card justify-center items-center">
    <Plot
      data={[
        {
          x: withdrawals.map((withdrawal) => withdrawal.transaction_date),
          y: withdrawals.map((withdrawal) => withdrawal.amount),
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'red' },
        },
          { type: 'bar', x: withdrawals.map((withdrawal) => withdrawal.transaction_date), y: withdrawals.map((withdrawal) => withdrawal.amount) },
      ]}
      layout={{ width: 1200, height: 500, title: 'Withdrawals' }}
      />
      </div>
  );
}

export default LineGraph