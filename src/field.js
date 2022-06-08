class Field {
  #field;
  #prompt;
  #validator;
  #parser;
  #response;

  constructor(field, prompt, validator, parser = (response) => response) {
    this.#field = field;
    this.#prompt = prompt;
    this.#validator = validator;
    this.#parser = parser;
    this.#response = null;
  }

  getResponse() {
    return this.#response;
  }

  getPrompt() {
    return this.#prompt;
  }

  isValid(answer) {
    return this.#validator(answer);
  }

  fill(answer) {
    this.#response = answer;
  }
}

module.exports = { Field };
