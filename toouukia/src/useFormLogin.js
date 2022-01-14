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
     console.log(errors);
     if (Object.keys(errors).length === 0) {
       alert("Login Sucessful");
       window.location = "/Dash";
     } else {
       alert("Seems You didn't apply the correct GEAR");
     }
  };
  return { handleChnage, values, handleSubmit, errors };
};
export default useFormLogin;
