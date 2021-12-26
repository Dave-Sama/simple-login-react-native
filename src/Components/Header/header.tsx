import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Platform} from 'react-native';
import Torch from 'react-native-torch';

const Header = () => {
  const [torch, setTorch] = useState(false);

  const handleTorch = async () => {
    /* Platform based version */

    if (Platform.OS === 'ios') {
      Torch.switchState(torch);
    } else {
      const cameraAllowed = await Torch.requestCameraPermission(
        'Camera Permissions', // dialog title
        'We require camera permissions to use the torch on the back of your phone.', // dialog body
      );

      if (cameraAllowed) {
        Torch.switchState(torch);
      }
    }
    /* Simple version */

    // setTorch(!torch);
    // if (torch) {
    //   Torch.switchState(true); // Turn ON
    // } else {
    //   Torch.switchState(false); // Turn OFF
    // }
  };
  return (
    <View style={styles.root}>
      <Text style={styles.textHeader}>Header</Text>
      <Pressable style={styles.flashlight} onPress={handleTorch}>
        <Text style={styles.text}>Flashlight</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#faa94d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    flex: 3,
    marginHorizontal: 30,
    left: 40,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {},
  flashlight: {
    flex: 1,
    backgroundColor: '#edc16f',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    height: 30,
    borderRadius: 5,
  },
});

export default Header;
