import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

const HeaderLeftButton = ({ canGoBack, tintColor }) => {
  const navigation = useNavigation(); // 화면 전환

  if (!canGoBack) {
    return null;
  }

  return (
    <Pressable
      onPress={navigation.goBack} // 클릭시, 이전으로 이동
      hitSlop={10} // 터치 영역 설정
    >
      <MaterialCommunityIcons name="chevron-left" size={30} color={tintColor} />
    </Pressable>
  );
};

HeaderLeftButton.propTypes = {
  canGoBack: PropTypes.bool,
  tintColor: PropTypes.string,
};

export default HeaderLeftButton;
