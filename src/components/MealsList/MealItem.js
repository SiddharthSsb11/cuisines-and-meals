import {View, Pressable, Text, Image} from 'react-native';
import styles from './MealItem.styles';
import MealDetails from '../MealDetails';

const MealItem = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress
}) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => (pressed ? styles.buttonPressed : null)}
        onPress={onPress}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{uri: imageUrl}} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;
