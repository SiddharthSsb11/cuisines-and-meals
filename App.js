import {Text, View, StatusBar} from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen';
import styles from './App.styles';
const App = () => {
  return (
    <View style={styles.rootScreen}>
      <StatusBar barStyle="light-content" />
      <CategoriesScreen />
    </View>
  );
};

export default App;
