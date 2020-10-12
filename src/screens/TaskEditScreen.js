import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import TaskForm from '../components/TaskForm';

const TaskEditScreen = ({ navigation }) => {
  const { tasks } = useSelector((state) => state.toDo);

  const task = tasks.find((task) => task.id === navigation.getParam('id'));

  return (
    <TaskForm
      initialValues={{
        id: task.id,
        title: task.title,
        completed: task.completed,
        userId: task.userId,
      }}
      action={'update'}
      callback={() => navigation.navigate('TaskShow', {id: task.id})}
    />
  );
};

const styles = StyleSheet.create({});

export default TaskEditScreen;
