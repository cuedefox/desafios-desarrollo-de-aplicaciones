import { useEffect, useState } from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { Input, Item, ItemContainer } from '../../components';
import ModalItem from '../modal-item';

const Tasks = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});

  useEffect(() => {
    return () => {};
  }, [isModalVisible]);
  const onHandleChangeText = (task) => {
    setTask(task);
  };
  const onHandleAddTask = () => {
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        check: false,
        value: task
      }
    ]);
    setTask('');
  };
  const onHandleCheckTask = (id) => {
    const tasksAndChecked = tasks;
    const index = tasksAndChecked.findIndex((item) => item.id === id);
    tasksAndChecked[index].check = !tasksAndChecked[index].check;
    setTasks(tasksAndChecked);
  };
  const renderItem = (item) => (
    <Item
      item={item.item}
      onHandleCheckTask={onHandleCheckTask}
      onHandleModal={onHandleModal}
    />
  );
  const onHandleModal = (item) => {
    setSelectedTask(item);
    setIsModalVisible(true);
  };
  const deleteTask = (id) => {
    const newTasks = tasks.filter((item) => item.id !== id);
    setTasks(newTasks);
    setIsModalVisible(false);
  };
  return (
    <View style={styles.tasksContanier}>
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
      <ModalItem
        isModalVisible={isModalVisible}
        item={selectedTask}
        setIsModalVisible={setIsModalVisible}
        deleteTask={deleteTask}
      />
    </View>
  );
};

export default Tasks;
