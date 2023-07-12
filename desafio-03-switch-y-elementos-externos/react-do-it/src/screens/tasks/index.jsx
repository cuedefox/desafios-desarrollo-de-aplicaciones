import { Button, View } from 'react-native';

import { styles } from './styles';
import { Input, ItemContainer } from '../../components';
import { COLORS } from '../../themes/colors';

const Tasks = ({
  task,
  onHandleAddTask,
  onHandleChangeText,
  tasks,
  onHandleCheckTask,
  renderItem,
  onHandleMenu
}) => {
  return (
    <View style={styles.tasksContanier}>
      <Button title="<-- Volver" color={COLORS.text} onPress={onHandleMenu} />
      <Input
        task={task}
        onHandleChangeText={onHandleChangeText}
        onHandleAddTask={onHandleAddTask}
      />
      <ItemContainer
        tasks={tasks}
        onHandleCheckTask={onHandleCheckTask}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Tasks;
