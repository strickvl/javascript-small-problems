function validatePIN(str) {
  return /^\d{4}$/.test(str)
}

validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false
