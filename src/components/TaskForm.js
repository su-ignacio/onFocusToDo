import React, { useState } from 'react';
import { StyleSheet, Switch } from 'react-native';
import { useDispatch } from 'react-redux';
import { Card, CardSection, Spacer } from './common';
import InputSpinner from 'react-native-input-spinner';
import { Button, Text, Input } from 'react-native-elements';
import {
  editTask, 
  addTask
} from '../actions';

const TaskForm = ({ initialValues, action, callback}) => {
  const dispatch = useDispatch();
  
  const [title, setTitle] = useState(initialValues.title);
  const [completed, setCompleted] = useState(initialValues.completed);
  const [userId, setUserId ] = useState(initialValues.userId)

  const toggleSwitch = () => setCompleted((previousState) => !previousState);

  return (
    <Card>
      <CardSection>
        <Text h4 h4Style={styles.head}>
          Description
        </Text>
        <Input
          style={styles.input}
          value={title}
          onChangeText={(text) => setTitle(text)}
          multiline={true}
          placeholder={'Enter Description'}
        />
      </CardSection>
      <Spacer />

      <CardSection style={styles.container}>
        <Text h4 h4Style={styles.head}>
          User Id
        </Text>
          <InputSpinner
            min={0}
            step={1}
            colorPress={'#7FFF00'}
            colorMin={'#40c5f4'}
            height={30}
            width={100}
            initialValue={userId}
            value={userId}
            onChange={(num) => {
              setUserId(num);
            }}
          />
      </CardSection>
      <Spacer />

      <CardSection>
        <Text h4 h4Style={styles.head}>
          Completed
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={completed ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={completed}
        />  
      </CardSection>

      <Spacer>
        {action === 'update' ? (
          <Button
            title="Update Task"
            onPress={() =>
              dispatch(
                editTask(initialValues.id, title, completed, userId, callback),
              )
            }
          />
        ) : (
          <Button
            title="Save Task"
            onPress={() =>
              dispatch(addTask(title, completed, userId, callback))
            }
          />
        )}
      </Spacer>
    </Card>
  );

};

TaskForm.defaultProps = {
    initialValues: {
        title: '',
        completed: false,
        userId: ''
    }
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    height: 50
  },
  head: {
    paddingBottom: 15,
    fontSize: 20,
    color: '#105BF1',
    fontWeight: 'bold',
  },
});

export default TaskForm;