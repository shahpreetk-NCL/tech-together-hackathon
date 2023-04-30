import React from 'react';
import ActionTypeCard from '../components/AccountTypeCard';
import axios from "axios";
import TransactionCard from "../components/TransactionCard";
import LineGraph from "../components/LineGraph";

const Home = () => {
  const [accounts, setAccounts] = React.useState([]);
  // const [deposits, setDeposits] = React.useState([]);
  // const [withdrawals, setWithdrawals] = React.useState([]);
  // const [accountSelected, setAccountSelected] = React.useState(null);
  const [accountTransactions, setAccountTransactions] = React.useState([]);


  React.useEffect(() => {
    axios.get(`http://api.nessieisreal.com/customers/644d16619683f20dd5187937/accounts?key=${import.meta.env.VITE_API_KEY}`).then((response) => {
      console.log(response.data);
      setAccounts(response.data);
    });
  }, []);

  React.useEffect(() => {
    // Retrieve deposits and withdrawals for each account
    const fetchTransactions = async () => {
      for (const account of accounts) {
        // Retrieve deposits
        const depositResponse = await axios.get(`http://api.nessieisreal.com/accounts/${account._id}/deposits?key=${import.meta.env.VITE_API_KEY}`);
        // Add 1 second delay
        await new Promise(resolve => setTimeout(resolve, 100));
        // Store transactions in state variable
        setAccountTransactions(prevTransactions => [
          ...prevTransactions,
           depositResponse.data
        ]);

        // Retrieve withdrawals
        const withdrawalResponse = await axios.get(`http://api.nessieisreal.com/accounts/${account._id}/withdrawals?key=${import.meta.env.VITE_API_KEY}`);
        // Add 1 second delay
        await new Promise(resolve => setTimeout(resolve, 100));
        // Store transactions in state variable
        setAccountTransactions(prevTransactions => [
          ...prevTransactions,
          withdrawalResponse.data
        ]);
      }
    };

    fetchTransactions();
  }, [accounts]);
  const flattenTransactions = accountTransactions?.flat().sort((a, b) => new Date(b.transaction_date) - new Date(a.transaction_date)).slice(6);
  console.log(flattenTransactions);


  return (
    <>
      <div className="home">
        <div className="py-12 px-4 m-4 card glass ">
          <div className="flex gap-4 overflow-x-auto">
            {accounts.map((account) => (
              <div className="scroll-m-10" key={account._id}>
                <ActionTypeCard
                  key={account._id}
                  nickname={account.nickname}
                  type={account.type}
                  balance={account.balance}
                  />
              </div>
            ))}
          </div>
        </div>
      </div>

      {flattenTransactions && <TransactionCard transactions={flattenTransactions} />}

      <LineGraph transactions={ flattenTransactions} />
    </>
  );
};

export default Home;