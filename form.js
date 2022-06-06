const getDetails = () => {
  let index = 0;
  const questions = [
    'Please enter name :',
    'Please enter DOB :',
    'Please enter hobbies :'
  ]
  return () => {
    const question = questions[index];
    console.log(question);
    index++;
    return question;
  }
};

const displayDetails = (inputs) => {
  const args = inputs.map(record => record[0]);
  const [name, DOB, hobbiesList] = args;
  const hobbies = hobbiesList.split(',');

  console.log(JSON.stringify({ name, DOB, hobbies }));
  console.log('Thank you');
};

const readLines = (storeDetails) => {
  const recordDetails = getDetails();

  let question = recordDetails();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (chunk) => {
    storeDetails(question, chunk);
    question = recordDetails();
  });

  process.stdin.on('end', () => {
    console.log('end');
  });

  process.stdin.on('close', () => {
    console.log('close');
  });
};

const main = () => {
  const args = [];

  readLines((question, answer) => {
    args.push([question, answer.trim()]);

    if (args.length === 3) {
      displayDetails(args);
      process.exit();
    }
  })
};

main();
