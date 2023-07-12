import { View, Text, Button } from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../themes/colors';

const Menu = ({ onHandleMenu }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>React Do It!</Text>
      <Button title="Ir a tareas" color={COLORS.text} onPress={onHandleMenu} />
    </View>
  );
};

export default Menu;
