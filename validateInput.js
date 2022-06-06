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

const assertInput = (question, answer) => {
  if (question === 'name') {
    return isNameValid(answer);
  }
  if (question === 'DOB') {
    return isDOBValid(answer);
  }
  if (question === 'hobbies') {
    return areHobbiesValid(answer);
  }
  if (question === 'phoneNo') {
    return answer.length === 10;
  }
  return true;
};

exports.assertInput = assertInput;
