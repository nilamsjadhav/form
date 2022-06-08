class Form {
  #fields;
  #index;
  constructor(fields) {
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
    this.#index++;
  }

  isFormFilled() {
    return this.#fields.every(field => field.getResponse());
  }
}

exports.Form = Form;
