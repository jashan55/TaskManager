import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import TaskInput from '../components/Task/TaskInput';
import TaskFilter from '../components/Task/TaskFilter';
import TaskList from '../components/Task/TaskList';
import {COLORS} from '../utils/colors';

//  Component for task manager screen.
const TaskManagerScreen = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.header}> Task Manager </Text>
      <TaskInput />
      <TaskFilter />
      <View style={styles.container}>
        <TaskList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: COLORS.white,
  },
  titleContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
    backgroundColor: COLORS.white,
  },
  header: {
    fontSize: 28,
    fontWeight: 'normal',
    marginBottom: 20,
  },
});

export default TaskManagerScreen;
