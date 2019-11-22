import React from "react";

import AccountsBanner from "./accounts-banner";
import AccountsColumn from "./accounts-column";

import { filterAccountsByPaymentStatus } from "../utilities/dataFiltersForUsers";

// Make this an enum if TypeScript is added
const paymentStatus = {
  "ACTIVE": 0,
  "OVERDUE": 2,
  "INACTIVE": 1
}
// TODO: Add proptypes checker
const Account = ({ userData }) => {
  return userData ? (
    <main className="content grid" id="home-content">
      <AccountsBanner title="Accounts" />
      <section className="grid" id="account-grid">
        <AccountsColumn
          accounts={filterAccountsByPaymentStatus(userData, paymentStatus.ACTIVE)}
          columnStyle="active-account-column"
          columnTitle="Active"
          columnTitleStyle="active-account-container-title"
        />
        <AccountsColumn
          accounts={filterAccountsByPaymentStatus(userData, paymentStatus.OVERDUE)}
          columnStyle="overdue-account-column"
          columnTitle="Overdue"
          columnTitleStyle="overdue-account-container-title"
        />
        <AccountsColumn
          accounts={filterAccountsByPaymentStatus(userData, paymentStatus.INACTIVE)}
          columnStyle="inactive-account-column"
          columnTitle="Inactive"
          columnTitleStyle="inactive-account-container-title"
        />
      </section>
    </main>
  ) : null;
};

export default Account;

