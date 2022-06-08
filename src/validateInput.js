const isNameValid = (name) => name.length >= 5;

const isValid = (number) => isFinite(number) && number.length === 2;

const isYearValid = (year) => isFinite(year) && year.length === 4;

const isDOBValid = (date) => {
  const [year, month, day] = date.split('-');
  return isYearValid(year) && isValid(month) && isValid(day);
};

const areHobbiesValid = (hobbies) => {
  const hobbiesList = hobbies.split(',');
  return hobbiesList.length > 0;
};

const isAddressValid = (address) => address;

const isPhoneNumberValid = (phoneNo) => phoneNo.length === 10;

const assertInput = (field, input) => {
  const validations = {
    name: isNameValid(input),
    DOB: isDOBValid(input),
    hobbies: areHobbiesValid(input),
    phoneNo: isPhoneNumberValid(input),
    address1: isAddressValid(input),
    address2: isAddressValid(input)
  };

  if (validations[field]) {
    return true;
  }
  return false;
};

module.exports = {
  isDOBValid, isNameValid, isPhoneNumberValid, areHobbiesValid,
  isAddressValid, assertInput
};
