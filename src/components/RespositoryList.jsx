import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import repositories from '../../data';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 10,
    backgroundColor: '#ccc',
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={repositories}
        renderItem={({ item }) => <RepositoryItem item={item} />}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};

export default RepositoryList;
