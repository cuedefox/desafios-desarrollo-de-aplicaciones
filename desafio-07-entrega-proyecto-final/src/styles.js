import { StyleSheet, StatusBar } from 'react-native';

import { COLORS } from './themes/colors';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    paddingTop: StatusBar.currentHeight + 15
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
