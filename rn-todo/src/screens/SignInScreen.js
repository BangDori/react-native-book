import { Alert, Image, Keyboard, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TestImage from '../../assets/main.png'; // ES6 Module
import Input, {
  IconNames,
  KeyboardTypes,
  ReturnKeyTypes,
} from '../components/Input';
import SafeInputView from '../components/SafeInputView';
import { useEffect, useRef, useState } from 'react';
import Button from '../components/Button';
import { signIn } from '../api/auth';
import { useUserContext } from '../contexts/UserContext';

const SignInScreen = () => {
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const { setUser } = useUserContext();

  useEffect(() => {
    // email과 password 값이 입력되었을 때, 로그인 버튼이 활성화되도록 설정
    setDisabled(!email || !password);
  }, [email, password]);

  const onSubmit = async () => {
    // 로그인 중복 요청을 막기
    if (!isLoading && !disabled) {
      try {
        setIsLoading(true); // 로딩 시작
        Keyboard.dismiss(); // 키보드 제거하기
        const data = await signIn(email, password); // 로그인 제출
        setUser(data); // 유저 등록
        setIsLoading(false); // 로딩 종료
      } catch (error) {
        // 로그인 실패시 메시지 전달
        Alert.alert('로그인 실패', error, [
          { text: '확인', onPress: () => setIsLoading(false) },
        ]);
      }
    }
  };

  return (
    <SafeInputView>
      <View
        style={[
          styles.container,
          { paddingTop: insets.top, paddingBottom: insets.bottom },
        ]}
      >
        <Image source={TestImage} style={styles.image} />
        <Input
          title="이메일"
          placeholder="your@email.com"
          keyboardType={KeyboardTypes.EMAIL} // keyboardType을 email-address로 설정하여, 이메일을 입력하기 키보드로 설정
          returnKeyType={ReturnKeyTypes.NEXT} // returnKeyType을 설정하여, 다음으로 넘어갈지, 입력을 종료할지에 대한 키보드로 설정
          value={email} // value 값
          onChangeText={(email) => setEmail(email.trim())} // trim을 사용해 공백을 제거한 후, 상태를 저장
          iconName={IconNames.EMAIL} // 화면에 표시될 벡터 아이콘의 이름
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          ref={passwordRef} // Input 참조 전달
          title="비밀번호"
          returnKeyType={ReturnKeyTypes.DONE}
          secureTextEntry // 비밀번호와 같이 민감한 내용이 화면에 노출되지 않도록 설정
          value={password}
          onChangeText={(password) => setPassword(password.trim())}
          iconName={IconNames.PASSWORD}
          onSubmitEditing={onSubmit}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="로그인"
            onPress={onSubmit} // 버튼 클릭시, onSubmit 함수 호출
            disabled={disabled}
            isLoading={isLoading}
          />
        </View>
      </View>
    </SafeInputView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 30,
    paddingHorizontal: 20,
  },
});

export default SignInScreen;
