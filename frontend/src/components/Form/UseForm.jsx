/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

const UseForm = (validateInfo) => {
  const [values, setvalues] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmiting, setIsSubmiting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setvalues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validateInfo(values));
    setIsSubmiting(true);
  };

  return { handleChange, values, handleSubmit, errors };
};

export default UseForm;
