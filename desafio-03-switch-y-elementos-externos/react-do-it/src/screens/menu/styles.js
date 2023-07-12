import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';

export const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 250
  },
  title: {
    color: COLORS.primary,
    fontFamily: 'hey',
    fontSize: 60
  }
});
