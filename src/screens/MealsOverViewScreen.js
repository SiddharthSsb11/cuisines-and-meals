import {useLayoutEffect} from 'react';
import {View, FlatList} from 'react-native';
import MealItem from '../components/MealsList/MealItem';
import {MEALS, CATEGORIES} from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';

const MealsOverViewScreen = ({route, navigation}) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(meal => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    // dynamically setting navigation options
    const categoryTitle = CATEGORIES.find(
      category => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
};

export default MealsOverViewScreen;
