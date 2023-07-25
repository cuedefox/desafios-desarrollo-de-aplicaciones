import { StyleSheet } from 'react-native';

import { COLORS } from '../../../themes/colors';

export const styles = StyleSheet.create({
  itemsContainer: {
    backgroundColor: COLORS.background,
    minHeight: 550,
    flexGrow: 1,
    marginBottom: 200
  },
  noTaskText: {
    color: COLORS.primary,
    fontFamily: 'hey',
    fontSize: 40,
    alignSelf: 'center',
    marginTop: 100
  },
  flatList: {
    marginVertical: 15
  },
  list: {
    gap: 15
  }
});
