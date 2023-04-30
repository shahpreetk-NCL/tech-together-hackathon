
const AccountTypeCard = (prop) => {
  const { nickname, type, balance } = prop;
  return (
    <div>
      <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">{nickname}</h2>
          <p className="text-primary-content">{type} Account</p>
          <div className="card-actions justify-end">
            <button className="btn">£{balance.toFixed(2)}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountTypeCard;