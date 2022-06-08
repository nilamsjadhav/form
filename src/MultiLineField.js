class MultiLineField {
  #name;
  #prompts;
  #validator;
  #parser;
  #responses;

  constructor(name, prompts, validator, parser = (response) => response) {
    this.#name = name;
    this.#prompts = prompts;
    this.#validator = validator;
    this.#parser = parser;
    this.#responses = [];
  }

  getPrompt() {
    return this.#prompts[this.#responses.length];
  }

  isValid(answer) {
    return this.#validator(answer);
  }

  fill(answer) {
    this.#responses.push(answer);
  }

  isFilled() {
    return this.#responses.length === this.#prompts.length;
  }

  getInfo() {
    const name = this.#name;
    const response = this.#parser(this.#responses);
    return { name, response };
  }
}

module.exports = { MultiLineField };
