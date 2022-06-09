#! /bin/bash

function testMain(){
  echo 'should give user information'

  prompts=$( echo `node fillForm.js << EOF
  nilam
  2001-12-12
  reading
  1234567890
  Nilewadi
  kolhapur
  EOF`)

  echo -n '{"name":"nilam","DOB":"2001-12-12","hobbies":["reading"],"phone number":"1234567890","address":"Nilewadi\nkolhapur"}' > ./test/info.json

  diff userDetail.json ./test/info.json
}

function testPromptsInMain(){
  echo 'should give same prompts'

  prompts=$( echo `node fillForm.js << EOF
nilam
2001-12-12
reading
1234567890
Nilewadi
kolhapur
EOF` )

  expectedPrompts=$( echo 'Enter name Enter DOB Enter hobbies Enter phone number Enter address line 1 Enter address line 2 Thank you' )

  if [[ ${prompts} == ${expectedPrompts} ]]
  then
    echo '----------------------------------  Passed'
  fi
}

testMain
testPromptsInMain