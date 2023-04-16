import { StyleSheet, View } from 'react-native';
import Button, { ButtonTypes } from './Button';
import { useCallback } from 'react';

const NumberButton = ({ width, formula, setFormula, setResult }) => {
  const onPressNumber = useCallback(
    (number) => {
      const last = formula[formula.length - 1];
      if (isNaN(last)) {
        setResult(number);
        setFormula((prev) => [...prev, number]);
      } else {
        const newNumber = number === -1 ? last * -1 : (last ?? 0) * 10 + number;
        setResult(newNumber);
        setFormula((prev) => {
          prev.pop();
          return [...prev, newNumber];
        });
      }
    },
    [formula, setFormula, setResult]
  );

  return (
    <View style={styles.leftPad}>
      <View style={styles.number}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <Button
            key={num}
            title={num.toString()}
            onPress={() => onPressNumber(num)}
            buttonStyle={{ width, height: width, marginBottom: 1 }}
          />
        ))}
      </View>

      <View style={styles.bottom}>
        <Button
          title="+/-"
          onPress={() => onPressNumber(-1)}
          buttonType={ButtonTypes.NUMBER}
          buttonStyle={{
            width,
            height: width,
            marginTop: 1,
          }}
        />
        <Button
          title="0"
          onPress={() => onPressNumber(0)}
          buttonType={ButtonTypes.NUMBER}
          buttonStyle={{
            width,
            height: width,
            marginTop: 1,
          }}
        />
        <Button
          title="."
          buttonType={ButtonTypes.NUMBER}
          buttonStyle={{
            width,
            height: width,
            marginTop: 1,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  leftPad: {
    width: '75%',
  },
  number: {
    flexWrap: 'wrap-reverse',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default NumberButton;
