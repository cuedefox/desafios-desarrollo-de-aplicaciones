import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

const Item = ({ item, onHandleCheckTask, onHandleModal }) => {
  return (
    <View style={styles.itemContainer}>
    <TouchableOpacity style={styles.checkbox} />
      <Text style={styles.itemTitle}>{item.value}</Text>
      <TouchableOpacity onPress={onHandleModal}>
        <Text style={styles.deleteItem}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Item;
