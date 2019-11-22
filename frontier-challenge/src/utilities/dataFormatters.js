import moment from "moment";

const userAccountDataFormatter = data => {
  let formattedData = [];
  for (let user of data) {
    let formattedUser = { ...user };
    formattedUser["PhoneNumber"] = formatPhoneNumber(user.PhoneNumber);
    formattedUser["PaymentDueDate"] = formatDate(user.PaymentDueDate);
    formattedUser["AmountDue"] = formatAmountDue(user.AmountDue);
    formattedData.push(formattedUser);
  }
  return formattedData;
};

const formatPhoneNumber = number => {
  let format = "(###)-###-####";
  for (let i = 0; i < number.length; i++) {
    format = format.replace("#", number[i]);
  }
  return format;
};

const formatDate = date => {
  return date ? moment(date).format("MM/DD/YYYY") : null;
};

const formatAmountDue = amount => {
  return amount !== 0 ? "$".concat(String(amount)) : null;
};

export default userAccountDataFormatter;
