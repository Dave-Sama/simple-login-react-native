import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const radioButtonsData: RadioButtonProps[] = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Option 1',
    value: 'option1',
  },
  {
    id: '2',
    label: 'Option 2',
    value: 'option2',
  },
];

const RadioButtons = ({setItem}) => {
  const [radioButtons, setRadioButtons] =
    useState<RadioButtonProps[]>(radioButtonsData);

  function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
    let x: any;
    setRadioButtons(radioButtonsArray);
    for (let {selected, value} of radioButtonsArray) {
      if (selected) {
        x = value;
      }
    }
    setItem(x);
  }

  return (
    <View style={styles.root}>
      <RadioGroup
        layout="row"
        radioButtons={radioButtons}
        onPress={onPressRadioButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RadioButtons;
