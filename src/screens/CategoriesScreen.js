import {FlatList, View, Text} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTitle';

const renderCategoryItem = ({item}) => {
  // console.log('---renderItem prop item-----', item);
  return (
    <CategoryGridTitle
      title={item.title}
      color={item.color}></CategoryGridTitle>
  );
};

const CategoriesScreen = () => {
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
