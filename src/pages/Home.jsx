import React from 'react';
import ActionTypeCard from '../components/AccountTypeCard';
import axios from "axios";
import TransactionCard from "../components/TransactionCard";

const Home = () => {
  const [accounts, setAccounts] = React.useState([]);
  React.useEffect(() => {
    axios.get(`http://api.nessieisreal.com/customers/644d16619683f20dd5187937/accounts?key=${import.meta.env.VITE_API_KEY}`).then((response) => {
      console.log(response.data);
      setAccounts(response.data);
    });
  }, []);

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

      <TransactionCard />
    </>
  );
};

export default Home;