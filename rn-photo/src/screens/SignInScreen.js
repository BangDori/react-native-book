import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, View, Keyboard, ScrollView } from 'react-native';
import { useCallback, useEffect, useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';

import { AuthRoutes } from '../navigations/routes';
import Input, { InputTypes, ReturnKeyTypes } from '../components/Input';
import Button from '../components/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SafeInputView from '../components/SafeInputView';
import TextButton from '../components/TextButton';
import HR from '../components/HR';
import COVER from '../../assets/cover.png';
import { WHITE } from '../colors';

const SignInScreen = () => {
  useEffect(() => {
    console.log('SignIn Mount');
    return () => console.log('SignIn Unmount');
  }, []);

  const navigation = useNavigation();
  const { top, bottom } = useSafeAreaInsets();

  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useFocusEffect(
    useCallback(() => {
      return () => {
        setEmail('');
        setPassword('');
        setIsLoading(false);
        setDisabled(true);
      };
    }, [])
  );

  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

  const onSubmit = () => {
    Keyboard.dismiss();
    if (!disabled && !isLoading) {
      setIsLoading(true);
      console.log(email, password);
      setIsLoading(false);
    }
  };

  return (
    <SafeInputView>
      <StatusBar style="light" />
      <View style={[styles.container, { paddingTop: top }]}>
        <View style={StyleSheet.absoluteFill}>
          <Image source={COVER} styles={{ width: '100%' }} resizeMode="cover" />
        </View>

        <ScrollView
          style={[styles.form, { paddingBottom: bottom ? bottom + 10 : 40 }]}
          contentContainerStyle={{ alignItems: 'center' }}
          bounces={false}
          keyboardShouldPersistTaps="always"
        >
          <Input
            value={email}
            onChangeText={(text) => setEmail(text.trim())}
            inputType={InputTypes.EMAIL}
            ReturnKeyTypes={ReturnKeyTypes.NEXT}
            onSubmitEditing={() => passwordRef.current.focus()}
            styles={{ container: { marginBottom: 20 } }}
          />
          <Input
            ref={passwordRef}
            value={password}
            onChangeText={(text) => setPassword(text.trim())}
            inputType={InputTypes.PASSWORD}
            ReturnKeyTypes={ReturnKeyTypes.DONE}
            styles={{ container: { marginBottom: 20 } }}
          />
          <Button
            title="로그인"
            onPress={onSubmit}
            disabled={disabled}
            isLoading={isLoading}
            styles={{ container: { marginTop: 20 } }}
          />

          <HR text={'OR'} styles={{ container: { marginVertical: 30 } }} />

          <TextButton
            title={'회원가입'}
            onPress={() => navigation.navigate(AuthRoutes.SIGN_UP)}
          />
        </ScrollView>
      </View>
    </SafeInputView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  form: {
    flexGrow: 0,
    backgroundColor: WHITE,
    paddingHorizontal: 20,
    paddingTop: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default SignInScreen;
