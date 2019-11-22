import React from "react";
import AccountCard from "./account-card";

// TODO: Add proptypes checker

const AccountsColumn = props => {
  const { accounts, columnStyle, columnTitle, columnTitleStyle } = props;
  return (
    <section className="account-column" id={columnStyle}>
      <div className="account-container-title" id={columnTitleStyle}>
        <h3>{columnTitle}</h3>
      </div>
      {accounts.map(account => (
        <AccountCard key={account.Id} account={account} />
      ))}
    </section>
  );
};

export default AccountsColumn;


