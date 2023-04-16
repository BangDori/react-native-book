import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';

import ResultContainer from './containers/ResultContainer';
import ButtonContainer from './containers/ButtonContainer';

const App = () => {
  const [result, setResult] = useState(0);

  return (
    <View style={styles.container}>
      {/* IOS & Android difference  */}
      <StatusBar style="light" />

      {/* Result section */}
      <ResultContainer result={result} />

      {/* Button section */}
      <ButtonContainer setResult={setResult} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default App;
