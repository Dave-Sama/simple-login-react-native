import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './stylesReusableForm';

interface FormFieldProps {
  labelText: string;
  field: string;
  error: string;
  numInput?: string;
  validator: () => void;
  labelStyle?: object;
  textInputPlaceholder: string;
  textInputStyle?: object;
}

const FormField = ({
  field,
  setField,
  error,
  setError,
  labelText,
  validator,
  numInput,
  labelStyle,
  textInputPlaceholder,
  textInputStyle,
}: FormFieldProps) => {
  return (
    <View style={styles.container}>
      {labelText != 'Number' ? (
        <View style={styles.col}>
          <Text style={styles.label}>{labelText}:</Text>
          <TextInput
            style={styles.input}
            placeholder={textInputPlaceholder}
            value={field}
            onEndEditing={validator}
            onChangeText={field => {
              setField(field);
              setError('');
            }}
          />
        </View>
      ) : (
        <View style={styles.col}>
          <Text style={styles.label}>{labelText}:</Text>
          <TextInput
            style={styles.input}
            placeholder={textInputPlaceholder}
            value={field}
            onEndEditing={validator}
            keyboardType={'phone-pad'}
            onChangeText={field => {
              setField(field);
              setError('');
            }}
          />
        </View>
      )}
      <View style={styles.error}>
        {!!error && <Text style={styles.errorLabel}>{error}</Text>}
      </View>
    </View>
  );
};

export default FormField;
