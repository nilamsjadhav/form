class Field {
  #name;
  #prompt;
  #validator;
  #parser;
  #response;

  constructor(name, prompt, validator, parser = (response) => response) {
    this.#name = name;
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

  isFilled() {
    return this.getResponse();
  }

  getInfo() {
    const name = this.#name;
    const response = this.#parser(this.getResponse());
    return { name, response };
  }
}

module.exports = { Field };
