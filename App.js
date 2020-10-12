import 'react-native-gesture-handler';
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { setNavigator } from './src/navigationRef';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReactThunk from 'redux-thunk';
import reducers from './src/reducers';
import LoginScreen from './src/screens/LoginScreen';
import TasksScreen from './src/screens/TasksScreen';
import TaskShowScreen from './src/screens/TaskShowScreen';
import TaskEditScreen from './src/screens/TaskEditScreen';
import TaskCreateScreen from './src/screens/TaskCreateScreen';

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Login: LoginScreen
  }),
  mainFlow: createStackNavigator({
    Tasks: TasksScreen,
    TaskShow: TaskShowScreen,
    TaskEdit: TaskEditScreen,
    TaskCreate: TaskCreateScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  const store = createStore(reducers, {}, applyMiddleware(ReactThunk));
  return (
    <Provider store={store}>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </Provider>
  );
}