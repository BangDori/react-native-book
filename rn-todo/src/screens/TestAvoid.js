import {
  Image,
  KeyboardAvoidingView,
  Platform, // React Native에서 제공하는 API로, 플랫폼에 따라 코드를 다르게 적용할 때 사용
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import main from '../../assets/main.png';

const TestAvoid = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      /**
       * Platform이 ios일 경우 padding값 설정
       * padding은 키보드 높이만큼 paddingBottom 설정
       * height는 컴포넌트의 높이를 키보드 높이만큼 뺀 값으로 설정
       * position은 bottom의 값을 변경해서 화면의 위치를 옮기는 방법
       */
      behavior={Platform.select({ ios: 'padding' })}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={{ flex: 1 }}>
        <View style={[styles.box, { backgroundColor: '#737373' }]}>
          <Image source={main} style={{ width: 200, height: 200 }} />
        </View>

        <View style={[styles.box, { backgroundColor: '#818cf8' }]}>
          <TextInput
            style={styles.input}
            placeholder="padding"
            placeholderTextColor={'#000000'}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: '#ffffff',
    height: 40,
    width: '100%',
  },
});

export default TestAvoid;
