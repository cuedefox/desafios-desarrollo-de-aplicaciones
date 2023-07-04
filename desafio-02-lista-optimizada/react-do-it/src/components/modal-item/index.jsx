import { useEffect } from 'react';
import { View, Modal, Text, Button } from 'react-native';

import { styles } from './styles';

const ModalItem = ({ isModalVisible, item, setIsModalVisible, deleteTask }) => {
  useEffect(() => {}, [isModalVisible, item]);
  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Eliminar Item</Text>
        <Text style={styles.modalDetail}>
          ¿Desea eliminar la tarea {item.value}?
        </Text>
        <View style={styles.modalButtons}>
          <Button
            title="Volver"
            color="green"
            onPress={() => setIsModalVisible(!isModalVisible)}
          />
          <Button
            title="Eliminar"
            color="red"
            onPress={() => deleteTask(item.id)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalItem;
