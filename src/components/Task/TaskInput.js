import React, {useContext, useState} from 'react';
import TaskContext from '../../context/TaskContext';
import {Alert, StyleSheet, TextInput, View} from 'react-native';
import RoundedButton from '../RoundedButton';
import {COLORS} from '../../utils/colors';

// Component for inputting new tasks.
const TaskInput = () => {
  const [newTask, setNewTask] = useState('');
  const {addTask} = useContext(TaskContext);

  const handleAddTask = () => {
    if (newTask.trim() == '') {
      Alert.alert('Invalid input', 'Please enter a task');
    } else {
      addTask(newTask.trim());
      setNewTask('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Add a new task"
        value={newTask}
        onChangeText={setNewTask}
        style={styles.input}
      />
      <RoundedButton onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    padding: 50,
  },
});

export default TaskInput;
