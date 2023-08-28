import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes/colors';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    paddingTop: 40
  },
  modalTitle: {
    fontSize: 25,
    color: COLORS.primary,
    fontFamily: 'hey'
  },
  modalDetail: {
    marginTop: 20,
    fontSize: 20,
    fontFamily: 'hey',
    color: COLORS.primary
  },
  modalButtons: {
    flexDirection: 'row',
    marginTop: 50,
    alignItems: 'center',
    gap: 50
  }
});
