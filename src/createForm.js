const registerResponse = (form, response, logger) => {
  try {
    form.fillResponse(response);
  } catch (error) {
    logger('Invalid response');
  }

  if (form.isFormFilled()) {
    process.stdin.destroy();
    return form.getAllResponses();
  }
  logger(form.getCurrentPrompt());
};

module.exports = { registerResponse };
