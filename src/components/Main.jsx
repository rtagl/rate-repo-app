import Constants from 'expo-constants';
import { StyleSheet, Text, View } from 'react-native';
import RepositoryList from './RespositoryList';
import AppBar from './AppBar';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;
