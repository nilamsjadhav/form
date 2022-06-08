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
    return this.#response;
  }

  getInfo() {
    const name = this.#name;
    const response = this.#parser(this.#response);
    return { name, response };
  }

  equals(anotherField) {
    return anotherField instanceof Field &&
      this.#name === anotherField.#name &&
      this.#prompt === this.#prompt;
  }
}

module.exports = { Field };
