import { Button, TextInput, View } from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../../themes/colors';

const Input = ({ onHandleChangeText, task, onHandleAddTask }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Añada una tarea"
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="#160F30"
        onChangeText={onHandleChangeText}
        value={task}
      />
      <Button
        title="Agregar"
        color={COLORS.background}
        disabled={task.length === 0}
        onPress={onHandleAddTask}
      />
    </View>
  );
};

export default Input;
