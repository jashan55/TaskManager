/**
 * Task Manager React Native App
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, useColorScheme, View, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {TaskProvider} from './src/context/TaskContext';
import TaskManagerScreen from './src/screens/TaskManagerScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <TaskProvider>
      <SafeAreaView style={backgroundStyle}>
        <View
          style={[
            styles.container,
            {backgroundColor: isDarkMode ? Colors.black : Colors.white},
          ]}>
          <TaskManagerScreen />
        </View>
      </SafeAreaView>
    </TaskProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
