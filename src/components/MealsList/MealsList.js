import {View, FlatList} from 'react-native';
import styles from './MealsList.styles';
import MealItem from './MealItem';
import {useNavigation} from '@react-navigation/native';

const MealsList = ({items}) => {
  const navigation = useNavigation();

  const mealItemPressHandler = item => {
    navigation.navigate('MealDetails', {
      mealId: item.id
    });
  };
  const renderMealItem = itemData => {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
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
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;
