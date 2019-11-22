import React from "react";
// TODO: Add proptypes checker
const AccountCard = props => {
  const {
    FirstName,
    LastName,
    Email,
    PhoneNumber,
    AmountDue,
    PaymentDueDate
  } = props.account;

  return (
    <div className="account-container">
      <ul className="account-data-list">
        <li>
          <label>Name:</label>
          {LastName}, {FirstName}
        </li>
        <li>
          <label>Email:</label>
          {Email}
        </li>
        <li>
          <label>Phone Number:</label>
          {PhoneNumber}
        </li>
        {AmountDue ? (
          <li>
            <label>Amount Due:</label>
            {AmountDue}
          </li>
        ) : null}
        {PaymentDueDate ? (
          <li>
            <label>Due Date:</label>
            {PaymentDueDate}
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default AccountCard;


