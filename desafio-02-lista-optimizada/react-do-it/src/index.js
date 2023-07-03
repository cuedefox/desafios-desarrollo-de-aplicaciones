import { useState } from 'react';
import { SafeAreaView, View } from 'react-native';

import { Title, Input, ItemContainer, Item } from './components';
import { styles } from './styles';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
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
  const renderItem = ( item ) => (
    <Item item={item.item} onHandleCheckTask={onHandleCheckTask} />
  );
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Title />
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
        </View>
      </View>
    </SafeAreaView>
  );
}
