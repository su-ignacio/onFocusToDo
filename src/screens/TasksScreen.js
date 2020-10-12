import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import {
  getTask, 
  deleteTask
} from '../actions';
import Icon from 'react-native-vector-icons/FontAwesome';

const TasksScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { tasks } = useSelector(state => state.toDo);

  useEffect(() => {
    dispatch(getTask());
  }, []);

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('TaskShow', {id: item.id})}>
      <ListItem bottomDivider>
        {item.completed ? (
          <Icon name="check-square-o" size={22} color={'#54F110'} />
        ) : (
          <Icon name="square-o" size={22} />
        )}
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
        </ListItem.Content>
        <TouchableOpacity onPress={() => dispatch(deleteTask(item.id))}>
          <Icon name="trash" size={22} color={'#F12B10'} />
        </TouchableOpacity>
      </ListItem>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        keyExtractor={keyExtractor}
        data={tasks.slice(0, 20)}
        renderItem={renderItem}
      />
    </View>
  );
};

TasksScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity 
        onPress={() => navigation.navigate('TaskCreate')} 
        style={{paddingRight: 10}}
      >
        <Icon name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({});

export default TasksScreen;
