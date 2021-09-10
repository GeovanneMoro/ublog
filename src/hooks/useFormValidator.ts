import { useState } from 'react';

interface IReturn {
  errors: any;
  isFormValid: boolean;
  validate: (event: React.SyntheticEvent<Element, Event>) => void;
  resetValidator: () => void;
}

const useFormValidator = (validations: any): IReturn => {
  const [errors, setErrors] = useState(createInitialState());
  const [values, setValues] = useState(createInitialState());
  const [isFormValid, setFormValid] = useState(false);

  function createInitialState() {
    const defaultValues = {} as any;

    for (const prop in validations) {
      defaultValues[prop] = '';
    }

    return defaultValues;
  }

  function validate(event: React.SyntheticEvent) {
    const { name, value } = event.target as HTMLInputElement;
    errors[name] = validations[name](value);
    values[name] = value;
    const status = Object.entries(values).every(([prop, value]) => {
      return validations[prop](value) === '';
    });

    setErrors({ ...errors });
    setValues({ ...values });
    setFormValid(status);
  }

  function resetValidator() {
    setFormValid(false);
    setErrors(createInitialState());
    setValues(createInitialState());
  }

  return { errors, isFormValid, validate, resetValidator };
};

export { useFormValidator };
