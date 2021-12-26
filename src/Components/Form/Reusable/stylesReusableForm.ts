import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flexDirection: 'column'},
  col: {
    marginVertical: 5,
    flexDirection: 'row',
  },
  label: {
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 10,
    flex: 1,
  },
  input: {
    backgroundColor: 'white',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    flex: 4,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
  },
  error: {flex: 1},
  errorLabel: {
    color: 'red',
    textAlign: 'left',
    marginLeft: 10,
  },
});

export default styles;
