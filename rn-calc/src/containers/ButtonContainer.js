import { StyleSheet, View, useWindowDimensions } from 'react-native';
import NumberButton from '../components/NumberButton';
import OperatorButton from '../components/OperatorButton';
import { useState } from 'react';

const ButtonContainer = ({ setResult }) => {
  const [formula, setFormula] = useState([]);

  const windowWidth = useWindowDimensions().width;
  const width = (windowWidth - 5) / 4;

  return (
    <View style={styles.buttonContainer}>
      <NumberButton
        width={width}
        formula={formula}
        setFormula={setFormula}
        setResult={setResult}
      />
      <OperatorButton
        width={width}
        formula={formula}
        setFormula={setFormula}
        setResult={setResult}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default ButtonContainer;
