import { StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import { BLACK, GRAY, PRIMARY } from '../colors';
import { forwardRef, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Expo에서 제공하는 vector icon 라이브러리

export const KeyboardTypes = {
  DEFAULT: 'default', // 기본 키보드
  EMAIL: 'email-address', // 이메일을 입력하기 좋은 키보드로 설정
};

export const ReturnKeyTypes = {
  DONE: 'done', // done키가 있는 키보드
  NEXT: 'next', // next키가 있는 키보드
};

export const IconNames = {
  EMAIL: 'email', // 이메일 아이콘
  PASSWORD: 'lock', // 패스워드 아이콘
};

// ref 전달 받기 위해 forwardRef 사용
const Input = forwardRef(
  // 두 번째로 들어오는 파라메터로, Input의 ref를 받음
  ({ title, placeholder, value, iconName, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <View style={styles.container}>
        <Text
          style={[
            styles.title,
            value && styles.hasValueTitle, // value 값의 유무에 따라 hasValueTitle 스타일 적용
            isFocused && styles.focusedTitle, // isFocused 상태에 따라 focusedTitle 스타일 적용
          ]}
        >
          {title}
        </Text>
        <View>
          <TextInput
            {...props}
            ref={ref}
            value={value}
            style={[
              styles.input,
              value && styles.hasValueInput, // value 값의 유무에 따라 hasValueInput 스타일 적용
              isFocused && styles.focusedInput, // isFocused 상태에 따라 focusedInput 스타일 적용
            ]}
            placeholder={placeholder ?? title} // ??는 undefined와 null만 false로 처리
            placeholderTextColor={GRAY.DEFAULT}
            autoCapitalize="none" // 대문자 시작 기능 끄기
            autoCorrect={false} // 오타 자동 수정 기능 끄기
            textContentType="none" // 자동 완성 기능 끄기
            keyboardAppearance="light" // 키보드 색상 설정
            onFocus={() => setIsFocused(true)} // 입력 칸에 Focus 되었을 때 호출
            onBlur={() => setIsFocused(false)} // 입력 칸에서 Blur 되었을 때 호출
          />

          <View style={styles.icon}>
            <MaterialCommunityIcons // 벡터 아이콘 컴포넌트
              name={iconName}
              size={20}
              color={(() => {
                switch (true) {
                  case isFocused:
                    return PRIMARY.DEFAULT;
                  case !!value:
                    return BLACK;
                  default:
                    return GRAY.DEFAULT;
                }
              })()} // 즉시 실행 함수 표현(IIFE)을 사용하여, 색상이 바로 반영될 수 있도록 적용
            />
          </View>
        </View>
      </View>
    );
  }
);

Input.displayName = 'Input';

Input.defaultProps = {
  keyboardType: KeyboardTypes.DEFAULT,
  returnKeyType: ReturnKeyTypes.DONE,
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  iconName: PropTypes.oneOf(Object.values(IconNames)),
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    marginBottom: 4,
  },
  hasValueTitle: {
    color: BLACK,
  },
  focusedTitle: {
    fontWeight: '600',
    color: PRIMARY.DEFAULT,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 42,
    paddingLeft: 30,
  },
  hasValueInput: {
    borderColor: BLACK,
    color: BLACK,
  },
  focusedInput: {
    borderWidth: 2,
    borderColor: PRIMARY.DEFAULT,
    color: PRIMARY.DEFAULT,
  },
  icon: {
    position: 'absolute',
    left: 8,
    height: '100%',
    justifyContent: 'center',
  },
});

export default Input;
