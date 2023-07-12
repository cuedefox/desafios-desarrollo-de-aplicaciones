import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, View } from 'react-native';

import { Item, ModalItem } from './components';
import { Menu, Tasks } from './screens';
import { styles } from './styles';
import { COLORS } from './themes';

export default function App() {
  const [loaded] = useFonts({
    hey: require('../assets/fonts/hey.ttf')
  });
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});
  const [isMenuActive, setIsMenuActive] = useState(true);
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
  const onHandleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={COLORS.secodary} size="large" />
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {isMenuActive ? (
          <Menu onHandleMenu={onHandleMenu} />
        ) : (
          <Tasks
            task={task}
            onHandleAddTask={onHandleAddTask}
            onHandleChangeText={onHandleChangeText}
            tasks={tasks}
            onHandleCheckTask={onHandleCheckTask}
            renderItem={renderItem}
            onHandleMenu={onHandleMenu}
          />
        )}
      </View>
      <ModalItem
        isModalVisible={isModalVisible}
        item={selectedTask}
        setIsModalVisible={setIsModalVisible}
        deleteTask={deleteTask}
      />
    </SafeAreaView>
  );
}
