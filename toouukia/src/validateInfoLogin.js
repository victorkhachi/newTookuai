export default function validateInfoLogin(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username required";
  }
  if (!values.password.trim()) {
    errors.password = "password required";
  } else if (values.password.length < 8) {
    errors.password = "Password needs to be 8 characters";
  }

  return errors;
}
