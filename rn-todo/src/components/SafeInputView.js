import {
  Keyboard, // Keyboard 제어를 위한 라이브러리 dismiss - 다른 영역 클릭시 키보드 제거
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from 'react-native';
import PropTypes from 'prop-types';

const SafeInputView = ({ children }) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({ ios: 'padding' })}
    >
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        {children}
      </Pressable>
    </KeyboardAvoidingView>
  );
};

SafeInputView.propTypes = {
  children: PropTypes.node,
};

export default SafeInputView;
