import React from 'react';
import { StyleSheet, TouchableOpacity}  from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, CardSection, Spacer } from '../components/common';
import { Text } from 'react-native-elements';

const TaskShowScreen = ({ navigation }) => {
  const { tasks } = useSelector((state) => state.toDo);

  const task = tasks.find(
    (task) => task.id === navigation.getParam('id'),
  );

  return (
    <Card>
      <CardSection>
        <Text h4 h4Style={styles.head}>
          Description
        </Text>
        <Text style={styles.data}>{task.title}</Text>
      </CardSection>
      <Spacer />
      <CardSection>
        <Text h4 h4Style={styles.head}>
          Task Id
        </Text>
        <Text style={styles.data}>{task.id}</Text>
      </CardSection>
      <Spacer />
      <CardSection>
        <Text h4 h4Style={styles.head}>
          User Id
        </Text>
        <Text style={styles.data}>{task.userId}</Text>
      </CardSection>
      <Spacer />
      <CardSection>
        <Text h4 h4Style={styles.head}>
          Completed
        </Text>
        {task.completed ? (
          <Icon name="check-square-o" size={30} color={'#54F110'} />
        ) : (
          <Icon name="square-o" size={30} />
        )}
      </CardSection>
    </Card>
  );
};

TaskShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('TaskEdit', {id: navigation.getParam('id')})}
        style={{paddingRight: 10}}
      >
        <Icon name="pencil" size={30} color={'#049240'} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  head: {
    paddingBottom: 10,
    fontSize: 20,
    color: '#105BF1',
   fontWeight: 'bold'
  },
  data: {
    fontSize: 18,
  },
});

export default TaskShowScreen;
