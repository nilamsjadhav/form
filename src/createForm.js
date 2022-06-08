const registerResponse = (form, response, logger, writeData) => {
  try {
    form.fillResponse(response);
  } catch (error) {
    logger('Invalid response');
  }

  if (form.isFormFilled()) {
    process.stdin.destroy();
    writeData(form.getAllResponses());
    logger('Thank you');
    return;
  }
  logger(form.getCurrentPrompt());
};

module.exports = { registerResponse };
