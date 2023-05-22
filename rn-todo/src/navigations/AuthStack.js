import { createNativeStackNavigator } from '@react-navigation/native-stack'; // 스택 방식을 활용하여 페이지 전환
import SignInScreen from '../screens/SignInScreen';
import { WHITE } from '../colors';

const Stack = createNativeStackNavigator();

// 로그인 화면
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: WHITE }, // 화면 배경색 설정
        headerShown: false, // header가 보이지 않도록 설정
      }}
    >
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
