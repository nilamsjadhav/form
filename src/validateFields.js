const isNameValid = (name) => name.length >= 5;

const isValid = (number) => isFinite(number) && number.length === 2;

const isYearValid = (year) => isFinite(year) && year.length === 4;

const isAddressValid = (address) => address;

const isPhoneNumberValid = (phoneNo) => phoneNo.length === 10;

const isDOBValid = (date) => {
  const [year, month, day] = date.split('-');
  return isYearValid(year) && isValid(month) && isValid(day);
};

const areHobbiesValid = (hobbies) => {
  const hobbiesList = hobbies.split(',');
  return hobbiesList.length > 0;
};

module.exports = {
  isDOBValid, isNameValid, isPhoneNumberValid, areHobbiesValid,
  isAddressValid
};
