function validateCode (code) {
    return /^[1-3]/.test(code);
  }

  const validateCode = (c) => /^[123]/.test(c.toString())

  function validateCode(code) {
    return +(code + '')[0] < 4
  }