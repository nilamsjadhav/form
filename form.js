const display = () => {
  let index = 0;
  const questions = {
    name: 'Please enter name ',
    DOB: 'Please enter DOB ',
    hobbies: 'Please enter hobbies ',
    phoneNo: 'Please phone number ',
    address1: 'Enter address line 1 ',
    address2: 'Enter address line 2 '
  }

  const questionsList = Object.keys(questions);
  return () => {
    const currentQue = questionsList[index];
    console.log(questions[currentQue]);
    index++;
    return [currentQue, questions[currentQue]];
  }
};

const displayDetails = (inputs) => {
  const args = inputs.map(record => record[1]);
  const [name, DOB, hobbiesList, phoneNum, ...giveAddress] = args;
  const hobbies = hobbiesList.split(',');

  const address = giveAddress.join('\n')
  console.log(JSON.stringify({ name, DOB, hobbies, phoneNum, address }));
  console.log('Thank you');
};

const readLines = (storeDetails) => {
  process.stdin.setEncoding('utf8');

  process.stdin.on('data', (chunk) => {
    storeDetails(chunk.trim());
  });

  process.stdin.on('end', () => {
    console.log('end');
  });

  process.stdin.on('close', () => {
    console.log('close');
  });
};

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

const main = () => {
  const args = [];
  const displayQuestion = display();

  let question = displayQuestion();
  readLines((answer) => {
    if (!assertInput(question, answer)) {
      console.log(`${question[1]}again`);
      return;
    }

    args.push([question, answer]);
    question = displayQuestion();

    if (args.length === 6) {
      displayDetails(args);
      process.exit();
    }
  })
};

main();
