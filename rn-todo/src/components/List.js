import {
  FlatList, // 필요한 만큼만 렌더링한 뒤 스크롤의 이동에 따라 필요한 부분을 추가로 렌더링
  StyleSheet,
  View,
} from 'react-native';
import { GRAY } from '../colors';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

// 공간을 띄우기 위한 컴포넌트
const Separator = () => {
  return <View style={styles.separator}></View>;
};

const List = ({ data, setIsBottom, onDelete, onToggle }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()} // Key 지정 - 비효율적인 업데이트를 방지하기 위해 사용
      renderItem={(
        { item } // 렌더링하는 컴포넌트
      ) => <ListItem item={item} onDelete={onDelete} onToggle={onToggle} />}
      windowSize={2} // 한 번에 얼마나 많은 양을 렌더링할지 결정하는 속성
      ItemSeparatorComponent={Separator} // 각 항목 사이에 렌더링할 컴포넌트
      ListHeaderComponent={View} // 목록의 가장 상위 항목 위에 추가할 컴포넌트
      ListHeaderComponentStyle={{ height: 10 }} // ListHeaderComponent의 스타일을 지정하는 속성
      onScroll={({
        nativeEvent: { contentOffset, layoutMeasurement, contentSize },
      }) => {
        const distance =
          contentSize.height - (contentOffset.y + layoutMeasurement.height);
        setIsBottom(!(distance > 20 || contentOffset.y === 0));
      }}
    />
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired,
  setIsBottom: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: GRAY.LIGHT,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default List;
