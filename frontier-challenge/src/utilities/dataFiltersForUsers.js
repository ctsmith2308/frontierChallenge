export const filterAccountsByPaymentStatus = (arrayOfAccounts, status) => {
  return arrayOfAccounts.filter(account => account.AccountStatusId === status);
};

