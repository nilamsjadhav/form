const isNameValid = (name) => {
  return name.length >= 5;
};

const isValid = (number) => {
  return /^\d{1,2}$/.test(number);
};

const isDOBValid = (date) => {
  const [year, month, day] = date.split('-');
  return year.length === 4 && isValid(month) && isValid(day);
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

exports.assertInput = assertInput;
