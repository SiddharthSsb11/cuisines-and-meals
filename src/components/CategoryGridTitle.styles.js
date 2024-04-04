import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 2,
    elevation: 4,
    margin: 16,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 8,
    //ios box-shadow
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
  },

  button: {
    flex: 1
  },

  buttonPressed: {
    opacity: 0.5
  },

  secondaryContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8
  },

  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18
  }
});

export default styles;
