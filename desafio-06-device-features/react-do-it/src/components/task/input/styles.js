import { StyleSheet } from 'react-native';

import { COLORS } from '../../../themes/colors';

export const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    backgroundColor: COLORS.primary,
    color: COLORS.text
  }
});
