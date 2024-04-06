import {useLayoutEffect} from 'react';
import {View, FlatList} from 'react-native';
import MealItem from '../components/MealItem';
import {MEALS, CATEGORIES} from '../data/dummy-data';
import styles from './MealsOverView.styles';

const MealsOverViewScreen = ({route, navigation}) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(meal => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  const mealItemPressHandler = item => {
    navigation.navigate('MealDetails', {
      mealId: item.id
    });
  };

  useLayoutEffect(() => {
    // dynamically setting navigation options
    const categoryTitle = CATEGORIES.find(
      category => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle
    });
  }, [catId, navigation]);

  const renderMealItem = itemData => {
    const item = itemData.item;

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
      onPress: mealItemPressHandler.bind(this, item)
    };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverViewScreen;
