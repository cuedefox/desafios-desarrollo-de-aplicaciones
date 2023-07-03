import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

const Item = ({ item, onHandleCheckTask, onHandleModal }) => {
  const checkStyle = item.check ? styles.checkboxYes : styles.checkboxNo;
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={checkStyle}
        onPress={() => onHandleCheckTask(item.id)}
      />
      <Text style={styles.itemTitle}>{item.value}</Text>
      <TouchableOpacity onPress={onHandleModal}>
        <Text style={styles.deleteItem}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Item;
