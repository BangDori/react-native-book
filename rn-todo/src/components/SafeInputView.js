import {
  Keyboard, // Keyboard 제어를 위한 라이브러리
  KeyboardAvoidingView, // iOS에서 키보드가 화면을 가리는 문제를 해결하기 위한 라이브러리
  Platform,
  Pressable, // 사용자의 터치 입력에 반응하는 컴포넌트
} from 'react-native';
import PropTypes from 'prop-types';

const SafeInputView = ({ children }) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({ ios: 'padding' })}
    >
      <Pressable
        style={{ flex: 1 }}
        onPress={() => {
          Keyboard.dismiss(); // 키보드 외에 다른 영역 클릭시 키보드 제거
        }}
      >
        {children}
      </Pressable>
    </KeyboardAvoidingView>
  );
};

SafeInputView.propTypes = {
  children: PropTypes.node,
};

export default SafeInputView;
