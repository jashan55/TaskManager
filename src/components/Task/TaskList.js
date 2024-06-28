import React, {useContext} from 'react';
import TaskContext from '../../context/TaskContext';
import {FlatList, StyleSheet, View} from 'react-native';
import TaskItem from './TaskItem';
import {COLORS} from '../../utils/colors';

// Component for task listing.
const TaskList = () => {
  const {tasks} = useContext(TaskContext);
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({item}) => <TaskItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 10,
  },
  flatListContent: {
    flexGrow: 1,
  },
});

export default TaskList;
