import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from '../screens/ListScreen';
import { PRIMARY, WHITE } from '../colors';
import HeaderLeftButton from '../components/HeaderLeftButton';
import HeaderRightButton from '../components/HeaderRightButton';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

// 목록 화면과 설정 화면
const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerTitleAlign: 'center', // header 중앙 정렬
        headerTintColor: PRIMARY.DEFAULT, // header 색상 설정
        headerTitleStyle: {
          fontWeight: '700',
        },
        headerLeft: HeaderLeftButton, // header 왼쪽에 보여질 컴포넌트
      }}
      initialRouteName="" // 시작 화면 설정
    >
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{
          title: 'TODO List',
          headerRight: HeaderRightButton, // header 오른쪽에 보여질 컴포넌트
        }}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
