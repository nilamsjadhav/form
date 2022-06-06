const { assertInput } = require('./validateInput.js');

const display = (questions) => {
  let index = 0;

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

const createForm = (questions) => {
  const args = [];
  const displayQuestion = display(questions);

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

const main = () => {
  const questions = {
    name: 'Please enter name ',
    DOB: 'Please enter DOB ',
    hobbies: 'Please enter hobbies ',
    phoneNo: 'Please phone number ',
    address1: 'Enter address line 1 ',
    address2: 'Enter address line 2 '
  };
  createForm(questions);
};

main();
