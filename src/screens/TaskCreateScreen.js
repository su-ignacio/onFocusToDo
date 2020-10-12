import React from 'react';
import { StyleSheet, View } from 'react-native';
import TaskForm from '../components/TaskForm';

const TaskCreateScreen = ({ navigation }) => {
  return (
    <View>
      <TaskForm
        action={'create'}
        callback={() => navigation.navigate('Tasks')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default TaskCreateScreen;
