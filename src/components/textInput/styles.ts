import { StyleSheet } from 'react-native';

export const textInputStyles = StyleSheet.create({
  wrapper: {
    paddingBottom: 8,
    marginVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    letterSpacing: 1.2,
    color: '#888',
  },
  input: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1.2,
  },
});
