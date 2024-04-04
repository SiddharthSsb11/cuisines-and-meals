import {FlatList, View, Text} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTitle';

const CategoriesScreen = ({navigation}) => {
  const categoryPressHandler = () => {
    navigation.navigate('MealsOverview');
  };

  const renderCategoryItem = ({item}) => {
    return (
      <CategoryGridTitle
        title={item.title}
        color={item.color}
        onPress={categoryPressHandler}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={item => {
          return item.id;
        }}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
