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

const assertInput = (field, answer) => {
  if (field === 'name') {
    return isNameValid(answer);
  }
  if (field === 'DOB') {
    return isDOBValid(answer);
  }
  if (field === 'hobbies') {
    return areHobbiesValid(answer);
  }
  if (field === 'phoneNo') {
    return answer.length === 10;
  }
  return true;
};

exports.assertInput = assertInput;
