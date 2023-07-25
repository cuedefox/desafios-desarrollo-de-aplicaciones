import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  statsContainer: {
    backgroundColor: COLORS.background,
    paddingVertical: 30,
    paddingHorizontal: 20
  },
  statsText: {
    color: COLORS.text,
    fontFamily: 'hey',
    fontSize: 20,
    marginVertical: 10
  }
});
