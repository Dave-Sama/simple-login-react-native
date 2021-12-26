/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Footer from './src/Components/Footer/footer';
import Form from './src/Components/Form/form';
import Header from './src/Components/Header/header';
import RadioButtons from './src/Components/RadioButtons/radioButton';
import SubmitButton from './src/Components/SubmitButton/submitButton';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.root}>
      <Header />
      <Form />

      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {flexDirection: 'column'},
});

export default App;
