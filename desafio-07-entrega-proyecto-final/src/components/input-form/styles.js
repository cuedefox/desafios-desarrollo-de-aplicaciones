import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 35,
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
    width: '90%',
    fontFamily: 'hey',
    marginBottom: 5
  },
  errorContainer: {
    flex: 1,
    paddingVerticalVertical: 5
  },
  error: {
    fontSize: 12,
    fontFamily: 'hey',
    paddingVertical: 5,
    color: COLORS.secondary
  }
});
