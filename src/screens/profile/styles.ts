import { StyleSheet } from 'react-native';

export const generalStyles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsWrapper: {
    position: 'absolute',
    right: 15,
    zIndex: 999,
  },
});
