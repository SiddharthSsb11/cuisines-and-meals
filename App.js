import {Text, View, StatusBar} from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen';
import styles from './App.styles';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverViewScreen from './src/screens/MealsOverViewScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="MealsOverview" component={MealsOverViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
