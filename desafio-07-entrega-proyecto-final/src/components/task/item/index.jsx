import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

const Item = ({ item, onHandleCheckTask, onHandleModal }) => {
  const [checkStatus, setCheckStatus] = useState(item.isCheck);
  const checkStyle = checkStatus ? styles.checkboxYes : styles.checkboxNo;
  const textStyle = checkStatus ? styles.itemTitleLine : styles.itemTitle;
  const onHandlePress = (id) => {
    setCheckStatus(!checkStatus);
    onHandleCheckTask(id);
  };
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={checkStyle}
        onPress={() => onHandlePress(item.id)}
      />
      <Text style={textStyle}>{item.value}</Text>
      <TouchableOpacity onPress={() => onHandleModal(item)}>
        <Text style={styles.deleteItem}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Item;
