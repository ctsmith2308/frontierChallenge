import React from "react";
// Probably rename this to something more generic so it can be reused.

// TODO: Add proptypes checker
const AccountsBanner = ({ title }) => {
  return (
    <div className="content-title-container">
      <h2>{title}</h2>
    </div>
  );
};

export default AccountsBanner;

