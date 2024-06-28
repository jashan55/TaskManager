import React, {useContext, useRef, useEffect} from 'react';
import TaskContext from '../../context/TaskContext';
import {View, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import {COLORS} from '../../utils/colors';

const TaskFilter = () => {
  const {setFilter} = useContext(TaskContext);

  // Animated values for each button, initially set to 0.
  const allAnim = useRef(new Animated.Value(1)).current;
  const completedAnim = useRef(new Animated.Value(0)).current;
  const pendingAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Set the initial filter to 'all' on load.
    setFilter('all');
  }, [setFilter]);

  const handlePress = filter => {
    setFilter(filter);

    // Animate the selected button.
    animateButton(filter);
  };

  const animateButton = filter => {
    Animated.parallel([
      Animated.timing(allAnim, {
        toValue: filter === 'all' ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(completedAnim, {
        toValue: filter === 'completed' ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(pendingAnim, {
        toValue: filter === 'pending' ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const backgroundColorAll = allAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [COLORS.white, COLORS.blue],
  });

  const backgroundColorCompleted = completedAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [COLORS.white, COLORS.blue],
  });

  const backgroundColorPending = pendingAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [COLORS.white, COLORS.blue],
  });

  const textColorAll = allAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [COLORS.textDefault, COLORS.textSelected],
  });

  const textColorCompleted = completedAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [COLORS.textDefault, COLORS.textSelected],
  });

  const textColorPending = pendingAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [COLORS.textDefault, COLORS.textSelected],
  });

  return (
    <View style={styles.filterContainer}>
      <TouchableOpacity onPress={() => handlePress('all')}>
        <Animated.View
          style={[
            styles.buttonContainer,
            {backgroundColor: backgroundColorAll},
          ]}>
          <Animated.Text style={{color: textColorAll}}>All</Animated.Text>
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('completed')}>
        <Animated.View
          style={[
            styles.buttonContainer,
            {backgroundColor: backgroundColorCompleted},
          ]}>
          <Animated.Text style={{color: textColorCompleted}}>
            Completed
          </Animated.Text>
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('pending')}>
        <Animated.View
          style={[
            styles.buttonContainer,
            {backgroundColor: backgroundColorPending},
          ]}>
          <Animated.Text style={{color: textColorPending}}>
            Pending
          </Animated.Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  buttonContainer: {
    borderRadius: 15,
    width: 100,
    padding: 10,
    alignItems: 'center',
  },
});

export default TaskFilter;
