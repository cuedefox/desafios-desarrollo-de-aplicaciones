import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EAE7AF',
    height: 45
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#A72693'
  },
  itemTitleLine: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#A72693',
    textDecorationLine: 'line-through'
  },
  deleteItem: {
    color: 'white',
    backgroundColor: 'red',
    paddingHorizontal: 6,
    fontSize: 25,
    fontWeight: 'bold',
    marginRight: 10
  },
  checkboxNo: {
    height: 25,
    width: 25,
    marginLeft: 10,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'grey'
  },
  checkboxYes: {
    height: 25,
    width: 25,
    marginLeft: 10,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'green'
  }
});
