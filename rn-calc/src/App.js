import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button, { ButtonTypes } from './components/Button';
import { useState } from 'react';

const App = () => {
  const [result, setResult] = useState(0);
  console.log(`redering: ${result}`);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>{result}</Text>

      <Button
        title="+"
        onPress={() => setResult((prevResult) => prevResult + 1)}
        buttonStyle={styles.button}
        buttonType={ButtonTypes.OPERATOR}
      ></Button>

      <View style={{ paddingVertical: 10 }}></View>

      <Button
        title="-"
        onPress={() => setResult((prevResult) => prevResult - 1)}
        buttonStyle={styles.button}
        buttonType={ButtonTypes.OPERATOR}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 60,
    fontWeight: '700',
  },
  button: {
    width: 100,
    height: 100,
  },
});

export default App;
