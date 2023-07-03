import { FlatList, Text, View } from 'react-native';

import { styles } from './styles';

const ItemContainer = ({ tasks, renderItem }) => {
  return (
    <View style={styles.itemContainer}>
      {tasks.length === 0 ? (
        <Text style={styles.noTaskText}>¡No hay Tareas!</Text>
      ) : (
        <FlatList
          style={styles.flatList}
          contentContainerStyle={styles.list}
          data={tasks}
          renderItem={renderItem}
          alwaysBounceVertical={false}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default ItemContainer;
