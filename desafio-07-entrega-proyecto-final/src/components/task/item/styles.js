import { StyleSheet } from 'react-native';

import { COLORS } from '../../../themes/colors';

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
    fontFamily: 'hey',
    fontSize: 22,
    color: COLORS.text
  },
  itemTitleLine: {
    fontFamily: 'hey',
    fontSize: 22,
    color: COLORS.text,
    textDecorationLine: 'line-through'
  },
  deleteItem: {
    color: COLORS.white,
    backgroundColor: 'red',
    paddingHorizontal: 6,
    fontSize: 25,
    fontFamily: 'hey',
    marginRight: 10
  },
  checkboxNo: {
    height: 25,
    width: 25,
    marginLeft: 10,
    borderRadius: 50,
    borderColor: COLORS.black,
    borderWidth: 1,
    backgroundColor: 'grey'
  },
  checkboxYes: {
    height: 25,
    width: 25,
    marginLeft: 10,
    borderRadius: 50,
    borderColor: COLORS.black,
    borderWidth: 1,
    backgroundColor: 'green'
  }
});
