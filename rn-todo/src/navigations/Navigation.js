import { useUserContext } from '../contexts/UserContext';
import { NavigationContainer } from '@react-navigation/native'; // 화면 전환을 위한 라이브러리
import MainStack from './MainStack';
import AuthStack from './AuthStack';

const Navigation = () => {
  const { user } = useUserContext(); // user 상태 가져오기

  return (
    <NavigationContainer>
      {user ? (
        <MainStack /> // 유저가 로그인 중이라면 메인 화면으로 이동
      ) : (
        <AuthStack /> // 로그인 중인 상태가 아니라면 로그인 화면으로 이동
      )}
    </NavigationContainer>
  );
};

export default Navigation;
