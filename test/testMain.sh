#! /bin/bash

function testMain() {
  local status='❌'

  node fillForm.js << EOF > /dev/null
nilam
2001-12-12
reading
1234567890
Nilewadi
kolhapur
EOF

  echo -n '{"name":"nilam","DOB":"2001-12-12","hobbies":["reading"],"phone number":"1234567890","address":"Nilewadi\nkolhapur"}' > ./test/info.json

  diff ./test/expectedUserDetails.json ./test/info.json
  status='✔'
  echo "${status} should give user information"
}

function testPromptsInMain(){
  local status='❌'

  local prompts=$( echo `node fillForm.js << EOF
nilam
2001-12-12
reading
1234567890
Nilewadi
kolhapur
EOF` )

  local expectedPrompts=$( echo 'Enter name Enter DOB Enter hobbies Enter phone number Enter address line 1 Enter address line 2 Thank you' )

  if [[ ${prompts} == ${expectedPrompts} ]]
  then
    status='✔'
  fi
  echo "${status} should give same prompts"
}

function test(){
  echo 'main'
  testMain
  testPromptsInMain
}

test