/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

function UseForm() {
  const [values, setvalues] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setvalues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return { handleChange, values, handleSubmit };
}

export default UseForm;
