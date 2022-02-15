import { View, StyleSheet, Image, Pressable } from 'react-native';
import Stats from './Stats';
import Text from './Text';

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={[styles.row]}>
        <Image
          style={styles.avatar}
          source={{ uri: `${item.ownerAvatarUrl}` }}
        />
        <View style={styles.info}>
          <Text style={styles.primary}>{item.fullName}</Text>
          <Text style={styles.secondary}>{item.description}</Text>
          <View style={styles.languageContainer}>
            <Text style={styles.language}>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.stats, styles.row]}>
        <Stats text="Stars" stat={item.stargazersCount} />
        <Stats text="Forks" stat={item.forksCount} />
        <Stats text="Reviews" stat={item.reviewCount} />
        <Stats text="Rating" stat={item.ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;

const styles = StyleSheet.create({
  card: {
    padding: 14,
  },
  row: {
    flexDirection: 'row',
  },
  info: {
    width: 0,
    flexGrow: 1,
  },
  stats: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 13,
  },
  primary: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 9,
  },
  secondary: {
    fontSize: 18,
    color: '#7a7a7a',
    fontWeight: '500',
    marginBottom: 9,
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 10,
    marginRight: 20,
  },
  languageContainer: {
    backgroundColor: '#2332db',
    alignSelf: 'flex-start',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  language: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});
