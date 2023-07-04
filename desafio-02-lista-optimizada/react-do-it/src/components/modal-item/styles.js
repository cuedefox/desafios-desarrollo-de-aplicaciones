import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#241663',
    alignItems: 'center',
    paddingTop: 40
  },
  modalTitle: {
    fontSize: 25,
    color: '#EAE7AF',
    fontWeight: 'bold'
  },
  modalDetail: {
    marginTop: 20,
    fontSize: 20,
    color: '#EAE7AF'
  },
  modalButtons: {
    flexDirection: 'row',
    marginTop: 50,
    alignItems: 'center',
    gap: 50
  }
});
