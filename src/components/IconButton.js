import {Pressable, StyleSheet, View} from 'react-native';
import styles from './IconButton.styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconButton = ({onPress, icon, color}) => {
  return (
    <View style={styles.mainContainer}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => ({
          opacity: pressed ? 0.8 : 0.2 // Update opacity based on pressed state
        })}>
        <View style={styles.iconContainer}>
          <Icon name={icon} size={24} color="white" />
        </View>
      </Pressable>
    </View>
  );
};

export default IconButton;
