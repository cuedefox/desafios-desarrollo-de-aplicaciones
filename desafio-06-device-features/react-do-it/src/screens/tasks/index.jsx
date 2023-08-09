import { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { Input, Item, ItemContainer } from '../../components';
import ModalItem from '../modal-item';
import { addTask, setModalVisible, setSelectedTask, setTask, toggleCheckTask, deleteTask } from '../../store/tasks/tasks.slice';
import { checkedTask, createdTask, deletedTask } from '../../store/stats/stats.slice';

const Tasks = () => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.tasks.task);
  const tasks = useSelector((state) => state.tasks.tasks);
  const isModalVisible = useSelector((state) => state.tasks.isModalVisible);
  const selectedTask = useSelector((state) => state.tasks.selectedTask);

  useEffect(() => {
    return () => {};
  }, [isModalVisible]);
  const onHandleChangeText = (task) => {
    dispatch(setTask(task));
  };
  const onHandleAddTask = () => {
    dispatch(addTask());
    dispatch(createdTask());
  };
  const onHandleCheckTask = (id) => {
    dispatch(toggleCheckTask(id));
    dispatch(checkedTask());
  };
  const renderItem = (item) => (
    <Item
      item={item.item}
      onHandleCheckTask={onHandleCheckTask}
      onHandleModal={onHandleModal}
    />
  );
  const onHandleModal = (item) => {
    dispatch(setSelectedTask(item));
    dispatch(setModalVisible(true));
  };
  const onDeleteTask = (id) => {
    dispatch(deleteTask(id));
    dispatch(deletedTask());
  };
  const onBackModal = () => {
    dispatch(setModalVisible(false));
  }
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
        setIsModalVisible={onBackModal}
        onDeleteTask={onDeleteTask}
      />
    </View>
  );
};

export default Tasks;
