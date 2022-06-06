const isNameValid = (name) => {
  return name.length >= 5;
}

const isValid = (number) => {
  return /^\d{1,2}$/.test(number);
};

const isDOBValid = (date) => {
  const [year, month, day] = date.split('-');
  return year.length === 4 && isValid(month) && isValid(day)
};

const isHobbiesValid = (hobbies) => {
  const hobbiesList = hobbies.split(',');
  return hobbiesList.length > 0;
};

const assertInput = (question, answer) => {
  if (question[0] === 'name') {
    return isNameValid(answer);
  }
  if (question[0] === 'DOB') {
    return isDOBValid(answer);
  }
  if (question[0] === 'hobbies') {
    return isHobbiesValid(answer);
  }
  if (question[0] === 'phoneNo') {
    return answer.length === 10;
  }
  return true;
};

exports.assertInput = assertInput;