import React from "react";

//хук управления формой и валидации формы
export function useFormWithValidation(initialValues, initialErrors, submitCallback) {
  const [values, setValues] = React.useState(initialValues);
  const [errors, setErrors] = React.useState(initialErrors);
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitCallback(values);
  }

  return { values, errors, isValid, handleChange, handleSubmit };
}