import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {listLesson} from '~/redux/features/LessonReducer';

const {height} = Dimensions.get("window")

function DrawerCustom(props) {
  const navigation = useNavigation();
  const {dataLesson} = useSelector(listLesson);

  return (
    <DrawerContentScrollView {...props}>
      {dataLesson.length > 0 ? (
        dataLesson.map(item => (
          <DrawerItem
            key={item._id}
            label={item.nameLesson}
            onPress={() =>
              navigation.navigate('DetailLesson', {dataLesson: item})
            }
          />
        ))
      ) : (
        <View style={styles.container}>
          <Text style={styles.text}>Khóa học chưa mua?</Text>
          <Text style={styles.text}>Hãy mua để nâng cao kiến thức.</Text>
        </View>
      )}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
});

export default DrawerCustom;