import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#160F30',
    paddingTop: StatusBar.currentHeight + 15
  },
  tasksContanier: {
    marginTop: 20,
    marginHorizontal: 15
  }
});
