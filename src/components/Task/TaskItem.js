import React, {useContext} from 'react';
import TaskContext from '../../context/TaskContext';
import {StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {COLORS} from '../../utils/colors';

// Compoenent for individual task items.
const TaskItem = ({item}) => {
  const {toggleTaskCompleted} = useContext(TaskContext);
  return (
    <View style={styles.card}>
      <View style={styles.taskItem}>
        <CheckBox
          value={item.completed}
          onValueChange={() => toggleTaskCompleted(item.id)}
          tintColors={{true: COLORS.blue, false: COLORS.black}}
          style={styles.checkbox}
        />
        <Text
          style={{
            textDecorationLine: item.completed ? 'line-through' : 'none',
          }}>
          {item.title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 10,
  },
});

export default TaskItem;
