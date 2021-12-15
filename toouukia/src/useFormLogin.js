import { useEffect, useState } from "react";

const useFormLogin = (validate) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChnage = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    window.location="/Dash"
  };
  return { handleChnage, values, handleSubmit, errors };
};
export default useFormLogin;
