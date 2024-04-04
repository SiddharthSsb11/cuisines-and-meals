import {View, Text, Pressable} from 'react-native';
import styles from './CategoryGridTitle.styles';

const CategoryGridTitle = ({title, color, onPress}) => {
  return (
    <View style={styles.mainContainer}>
      <Pressable
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null
        ]}
        android_ripple={{color: '#ccc'}}
        onPress={onPress}>
        <View style={[styles.secondaryContainer, {backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTitle;
