const customHeader = (req, res, next) => {
  try {
    const apiKey = req.headers.api_key;
    if (apiKey === "Crispo-01") {
      next();
    } else {
      res.status(403);
      res.send({ err: "API_KEY_NO_ES_CORRECTA" });
    }
  } catch (error) {
    res.status(403);
    res.send({ err: "ALGO_OCURRIO_EN_EL_CUSTOM_HEADER" });
  }
};

const customHeaderValidator = (req, res, next) => {
  try {
    const apiKeyValid = req.headers.valid_key;
    if (apiKeyValid === "010101") {
      next();
    } else {
      res.status(403);
      res.send({ err: "API_KEY_VALID_NO_ES_CORRECTA" });
    }
  } catch (error) {
    res.status(403);
    res.send({ err: "ALGO_OCURRIO_EN_EL_CUSTOM_HEADER" });
  }
};
module.exports = { customHeader, customHeaderValidator };
