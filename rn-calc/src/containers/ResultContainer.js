import { Text, View, StyleSheet } from 'react-native';

const ResultContainer = ({ result }) => {
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.text}>
        {result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 30,
    fontWeight: '700',
    color: '#ffffff',
    paddingBottom: 30,
    paddingRight: 30,
  },
});

export default ResultContainer;
