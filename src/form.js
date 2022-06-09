class Form {
  #fields;
  #index;
  constructor(...fields) {
    this.#fields = fields;
    this.#index = 0;
  }

  #currentField() {
    return this.#fields[this.#index];
  }

  getCurrentPrompt() {
    const field = this.#currentField();
    return field.getPrompt();
  }

  fillResponse(answer) {
    const field = this.#currentField();
    if (!field.isValid(answer)) {
      throw new Error('err');
    }
    field.fill(answer);

    if (field.isFilled()) {
      this.#index++;
    }
  }

  getAllResponses() {
    const entries = {};
    this.#fields.forEach(field => {
      const { name, response } = field.getInfo();
      entries[name] = response;
    });
    return entries;
  }

  isFormFilled() {
    return this.#fields.every(
      field => field.isFilled());
  }
}

module.exports = { Form };
