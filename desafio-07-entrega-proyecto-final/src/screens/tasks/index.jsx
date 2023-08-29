import { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { Input, Item, ItemContainer } from '../../components';
import { fetchTasks } from '../../db';
import { useUpdateStatsMutation } from '../../store/stats/api';
import {
  checkedTask,
  createdTask,
  deletedTask
} from '../../store/stats/stats.slice';
import {
  addTask,
  setModalVisible,
  setSelectedTask,
  setTask,
  toggleCheckTask,
  deleteTask,
  setTasks
} from '../../store/tasks/tasks.slice';
import ModalItem from '../modal-item';

const Tasks = () => {
  const dispatch = useDispatch();
  const localId = useSelector((state) => state.auth.user.localId);
  const task = useSelector((state) => state.tasks.task);
  const tasks = useSelector((state) => state.tasks.tasks);
  const isModalVisible = useSelector((state) => state.tasks.isModalVisible);
  const selectedTask = useSelector((state) => state.tasks.selectedTask);
  const tasksCreated = useSelector((state) => state.stats.tasksCreated);
  const tasksCompleted = useSelector((state) => state.stats.tasksCompleted);
  const tasksEliminated = useSelector((state) => state.stats.tasksEliminated);

  const [updateStats, { data, isLoading, error }] =
    useUpdateStatsMutation();

  useEffect(() => {
    fetchTasks()
      .then((tasks) => {
        dispatch(setTasks(tasks));
      })
      .catch((error) => {
        console.log('Failed to fetch tasks:', error);
      });
  }, [isModalVisible, tasks]);
  const updateStatsHandler = async () => {
    try {
      const response = await updateStats({
        localId,
        tasksCreated,
        tasksCompleted,
        tasksEliminated,
      });
      console.log('Update Stats Response:', response);
    } catch (error) {
      console.error('Error updating stats:', error);
    }
  };
  const onHandleChangeText = (task) => {
    dispatch(setTask(task));
  };
  const onHandleAddTask = () => {
    dispatch(addTask());
    dispatch(createdTask());
    updateStatsHandler();
  };
  const onHandleCheckTask = (id) => {
    dispatch(toggleCheckTask(id));
    dispatch(checkedTask());
    updateStatsHandler();
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
    updateStatsHandler();
  };
  const onBackModal = () => {
    dispatch(setModalVisible(false));
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
        setIsModalVisible={onBackModal}
        onDeleteTask={onDeleteTask}
      />
    </View>
  );
};

export default Tasks;
