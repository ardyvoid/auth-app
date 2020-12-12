import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormGroup, FormMember, ValidationResult } from 'state-library/lib';
import {
  useAuthLoginEffect,
  AuthUserActions,
  validateEmail
} from 'state-library/lib';

export const useIndexForm = (): FormGroup => {
  const dispatch = useDispatch();

  const [ submitLoginForm, loginCompleted ] = useAuthLoginEffect();

  const [ isEmailValid, setEmailValid ] = useState(true);
  const [ isFormValid, setFormValid ] = useState(false);
  const [ isFormSubmitted, setFormSubmitted ] = useState(false);

  if (loginCompleted && isFormSubmitted) {
    setFormSubmitted(false);
  }

  const validateForm = (): void => {
    let validForm = true;

    if (!isEmailValid) validForm = false;

    setFormValid(validForm);
  };

  const submitForm = () => {
    setFormSubmitted(true);
    submitLoginForm();
  };

  const changeEmailInput = (email: string) => {
    dispatch(AuthUserActions.update({ email }));
  };

  const validateEmailInput = async (email: string): Promise<ValidationResult> => {
    const emailValidation = validateEmail(email);

    setEmailValid(emailValidation.valid);
    validateForm();

    return emailValidation;
  };

  const emailMember: FormMember = {
    name: 'auth-email',
    change: changeEmailInput,
    validate: validateEmailInput
  };

  const changePasswordInput = (password: string) => {
    dispatch(AuthUserActions.update({ password }));
  };

  const passwordMember: FormMember = {
    name: 'auth-password',
    change: changePasswordInput,
    validate: () => Promise.resolve({ valid: true, errors: []})
  };

  const indexForm: FormGroup = {
    isValid: isFormValid,
    isCompleted: loginCompleted,
    isSubmitted: isFormSubmitted,
    submit: submitForm,
    members: {
      emailMember,
      passwordMember
    }
  };

  console.log('Login Form', indexForm);

  return indexForm;
};
