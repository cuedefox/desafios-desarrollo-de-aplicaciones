import { View, Text } from 'react-native';

import { styles } from './styles';

const Title = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>React Do It!</Text>
    </View>
  );
};

export default Title;
