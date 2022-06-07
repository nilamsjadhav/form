const { assertInput } = require('./validateInput.js');

class Form {
  #fields;
  #index;
  #questions;
  constructor(questions, fieldLabels) {
    this.#questions = questions;
    this.#fields = fieldLabels;
    this.#index = 0;
    this.userInfo = {};
  }

  #getQuestion() {
    const fieldName = this.#fields[this.#index];
    const currentQue = this.#questions[fieldName];
    return currentQue;
  }

  display() {
    console.log(this.#getQuestion());
  }

  isInputValid(answer) {
    const fieldName = this.#fields[this.#index];
    return assertInput(fieldName, answer);
  }

  storeAnswer(answer) {
    const fieldName = this.#fields[this.#index];
    this.userInfo[fieldName] = answer;
    this.#index++;
  }

  hasQuestionsOver() {
    return this.#fields.length === Object.keys(this.userInfo).length;
  }
}

exports.Form = Form;
