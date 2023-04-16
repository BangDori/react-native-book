import { View } from 'react-native';
import Button, { ButtonTypes } from './Button';
import { useCallback } from 'react';

const Operators = {
  CLEAR: 'C',
  MINUS: '-',
  PLUS: '+',
  EQUAL: '=',
};

const OperatorButton = ({ width, formula, setFormula, setResult }) => {
  const onPressOperator = useCallback(
    (operator) => {
      switch (operator) {
        case Operators.CLEAR:
          setFormula([]);
          setResult(0);
          return;

        case Operators.EQUAL:
          calculate();
          return;

        default:
          // eslint-disable-next-line no-case-declarations
          const last = formula[formula.length - 1];
          if ([Operators.PLUS, Operators.MINUS].includes(last)) {
            setFormula((prev) => {
              prev.pop();
              return [...prev, operator];
            });
          } else {
            setFormula((prev) => [...prev, operator]);
          }

          return;
      }
    },
    [formula, calculate, setResult, setFormula]
  );

  const calculate = useCallback(() => {
    let calculatedNumber = 0;
    let operator = '';

    formula.forEach((value) => {
      if ([Operators.PLUS, Operators.MINUS].includes(value)) {
        operator = value;
      } else {
        if (operator === Operators.PLUS) {
          calculatedNumber += value;
        } else if (operator === Operators.MINUS) {
          calculatedNumber -= value;
        } else {
          calculatedNumber = value;
        }
      }
    });

    setResult(calculatedNumber);
    setFormula([]);
  }, [formula, setFormula, setResult]);

  return (
    <View>
      <Button
        title={Operators.CLEAR}
        onPress={() => onPressOperator(Operators.CLEAR)}
        buttonType={ButtonTypes.OPERATOR}
        buttonStyle={{ width, height: width, marginTop: 1 }}
      />
      <Button
        title={Operators.MINUS}
        onPress={() => onPressOperator(Operators.MINUS)}
        buttonType={ButtonTypes.OPERATOR}
        buttonStyle={{ width, height: width, marginTop: 1 }}
      />
      <Button
        title={Operators.PLUS}
        onPress={() => onPressOperator(Operators.PLUS)}
        buttonType={ButtonTypes.OPERATOR}
        buttonStyle={{ width, height: width, marginTop: 1 }}
      />
      <Button
        title={Operators.EQUAL}
        onPress={() => onPressOperator(Operators.EQUAL)}
        buttonType={ButtonTypes.OPERATOR}
        buttonStyle={{
          width,
          height: width,
          marginTop: 1,
        }}
      />
    </View>
  );
};

export default OperatorButton;
