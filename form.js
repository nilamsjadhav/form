const getDetails = () => {
  let index = 0;
  const questions = [
    'Please enter name',
    'Please enter DOB',
    'Please enter hobbies'
  ]
  return () => {
    console.log(questions[index]);
    index++;
  }
};

const displayDetails = (inputs) => {
  const [name, DOB, hobbiesList] = inputs;
  const hobbies = hobbiesList.split(',');

  console.log(JSON.stringify({ name, DOB, hobbies }));
  console.log('Thank you');
};

const readLines = (storeDetails) => {
  const recordDetails = getDetails();
  recordDetails();

  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (chunk) => {
    recordDetails();
    storeDetails(chunk);
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

  readLines((input) => {
    args.push(input.trim())

    if (args.length === 3) {
      displayDetails(args);
      process.exit();
    }
  })
};

main();
