import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';

const Stats = () => {
  const tasksCreated = useSelector((state) => state.stats.tasksCreated);
  const tasksCompleted = useSelector((state) => state.stats.tasksCompleted);
  const tasksEliminated = useSelector((state) => state.stats.tasksEliminated);
  return (
    <View style={styles.container}>
      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>Tareas creadas: {tasksCreated}</Text>
        <Text style={styles.statsText}>
          Tareas completadas: {tasksCompleted}
        </Text>
        <Text style={styles.statsText}>Tareas borradas: {tasksEliminated}</Text>
      </View>
    </View>
  );
};

export default Stats;
