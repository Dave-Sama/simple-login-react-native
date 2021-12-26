import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import RadioButtons from '../RadioButtons/radioButton';
import SubmitButton from '../SubmitButton/submitButton';
import FormField from './Reusable/reusableForm';
import SweetAlert from 'react-native-sweet-alert';

const Form = () => {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [textError, setTextError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [numberError, setNumberError] = useState('');
  const [radioButton, setRadioButton] = useState('');
  const [errorFlag, setErrorFlag] = useState(false);

  function validateEmail(email: string) {
    var re = /\S+@\S+\.\S+/;
    console.log(re.test(email));
    return re.test(email);
  }

  const validateFields = () => {
    if (text.length < 3) {
      setTextError('Text is too short.');
      setErrorFlag(true);
    }
    if (text.length > 25) {
      setTextError('text is too long.');
      setErrorFlag(true);
    }
    if (!validateEmail(email)) {
      setEmailError('Email Address is incorrect.');
      setErrorFlag(true);
    }
    if (number.length < 0) {
      setNumber('number cannot be less than 0');
      setErrorFlag(true);
    }
    if (parseInt(number, 10) > 1000000) {
      setNumberError('number cannot be bigger than 1,000,000');
      setErrorFlag(true);
    }
  };

  const onSubmit = () => {
    if (
      textError === '' &&
      emailError === '' &&
      numberError === '' &&
      radioButton
    ) {
      SweetAlert.showAlertWithOptions({
        title: 'Thank You!',
        subTitle: 'Your Registration is complete',
        confirmButtonTitle: 'OK',
        confirmButtonColor: '#000',
        otherButtonTitle: 'Cancel',
        otherButtonColor: '#dedede',
        style: 'success',
        cancellable: true,
      });
    } else {
      SweetAlert.showAlertWithOptions({
        title: 'Opps..',
        subTitle: 'One or more than one field is wrong!',
        confirmButtonTitle: 'error',
        confirmButtonColor: '#000',
        otherButtonTitle: 'Cancel',
        otherButtonColor: '#dedede',
        style: 'error',
        cancellable: true,
      });
    }
  };

  return (
    <KeyboardAvoidingView>
      <ScrollView style={{marginHorizontal: 20, marginVertical: 40}}>
        <FormField
          field={text}
          setField={setText}
          error={textError}
          setError={setTextError}
          validator={validateFields}
          textInputPlaceholder="Please Enter Text..."
          labelText="Text"
        />
        <FormField
          field={email}
          setField={setEmail}
          error={emailError}
          setError={setEmailError}
          labelText="Email"
          validator={validateFields}
          textInputPlaceholder="Please Enter a Valid Email..."
        />
        <FormField
          field={number}
          setField={setNumber}
          error={numberError}
          setError={setNumberError}
          labelText="Number"
          numInput="True"
          validator={validateFields}
          textInputPlaceholder="Please Enter Phone Number..."
        />

        <RadioButtons setItem={setRadioButton} />
        <SubmitButton text="Submit" onPress={onSubmit} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Form;
