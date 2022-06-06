const display = () => {
  let index = 0;
  const questions = {
    name: 'Please enter name :',
    DOB: 'Please enter DOB :',
    hobbies: 'Please enter hobbies :',
    phoneNo: 'Please phone number :'
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
  const [name, DOB, hobbiesList, phoneNum] = args;
  const hobbies = hobbiesList.split(',');

  console.log(JSON.stringify({ name, DOB, hobbies, phoneNum }));
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

const isDOBValid = (date) => {
  const regex = /\d{4}-\d{1,2}-\d{1,2}/;
  return regex.test(date);
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
};

const main = () => {
  const args = [];
  const displayQuestion = display();

  let question = displayQuestion();
  readLines((answer) => {
    if (!assertInput(question, answer)) {
      console.log(`Please enter ${question[0]} again :`);
      return;
    }

    args.push([question, answer]);
    question = displayQuestion();

    if (args.length === 4) {
      displayDetails(args);
      process.exit();
    }
  })
};

main();
