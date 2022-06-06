const { Form } = require('./form.js');
const fs = require('fs');

const writeData = (userInfo) => {
  fs.writeFileSync('./userDetail.json', JSON.stringify(userInfo));
};

const structureDetails = (form) => {
  const userInfo = form.userInfo;
  const address = userInfo.address1 + '\n' + userInfo.address2;
  const hobbies = userInfo.hobbies.split(',');
  const { name, phoneNo, DOB } = userInfo;
  writeData({ name, DOB, hobbies, phoneNo, address });
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
  const fields = Object.keys(questions);
  const form = new Form(questions, fields);
  form.display();

  readLines((input) => {
    if (form.hasQuestionsOver()) {
      structureDetails(form);
      process.exit();
    }
    if (form.isInputValid(input)) {
      form.storeAnswer(input);
    }
    form.display();
  });
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
