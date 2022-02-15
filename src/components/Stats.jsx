import { View, Text, StyleSheet } from 'react-native';

const Stats = ({ text, stat }) => {
  const kFormatter = (num) => {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
      : Math.sign(num) * Math.abs(num);
  };
  return (
    <View style={styles.stat}>
      <Text style={styles.primary}>{kFormatter(stat)}</Text>
      <Text style={styles.secondary}>{text}</Text>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  stat: {
    padding: 5,
    alignItems: 'center',
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
});
