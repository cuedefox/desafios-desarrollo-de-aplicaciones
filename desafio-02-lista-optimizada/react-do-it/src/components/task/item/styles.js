import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EAE7AF',
    height: 30
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#A72693'
  },
  deleteItem: {
    color: 'red',
    fontSize: 25,
    fontWeight: 'bold',
    marginRight: 10
  },
  checkboxNo: {
    height: 10,
    width: 10,
    backgroundColor: 'grey'
  }
});
