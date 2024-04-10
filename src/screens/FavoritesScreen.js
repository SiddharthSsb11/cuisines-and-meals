import {View, Text, StyleSheet} from 'react-native';
import {useContext} from 'react';

import MealsList from '../components/MealsList/MealsList';
import {FavoritesContext} from '../store/context/favorites-context';
import {MEALS} from '../data/dummy-data';
import styles from './FavoritesScreen.styles';

const FavoritesScreen = () => {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter(meal =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;
