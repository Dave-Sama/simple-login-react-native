import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.footer}>Footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#faa94d',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    top: 130,
  },
  footer: {fontWeight: 'bold'},
});
export default Footer;
