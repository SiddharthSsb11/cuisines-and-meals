import {View, Text, ScrollView, Image, Button} from 'react-native';
import {MEALS} from '../data/dummy-data';
import {useLayoutEffect, useContext} from 'react';
import MealDetails from '../components/MealDetails';
import styles from './MealDetailsScreen.styles';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import {FavoritesContext} from '../store/context/favorites-context';

const MealDetailsScreen = ({route, navigation}) => {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const mId = route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mId);
  const mealIsFavorite = favoriteMealsCtx.ids.includes(mId);

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mId);
    } else {
      favoriteMealsCtx.addFavorite(mId);
    }
  };

  useLayoutEffect(() => {
    // dynamically setting navigation options
    const mealTitle = MEALS.find(meal => meal.id === mId).title;

    navigation.setOptions({
      title: mealTitle,
      headerRight: () => {
        return (
          <IconButton
            color="white"
            icon={mealIsFavorite ? 'star' : 'star-o'}
            onPress={changeFavoriteStatusHandler}
          />
        );
      }
    });
  }, [mId, navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;
