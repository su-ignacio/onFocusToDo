import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import {
  emailChanged,
  passwordChanged,
  loginUser
} from '../actions/AuthActions';
import { Spacer }  from '../components/common';
import { Input, Button } from 'react-native-elements';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { 
    email, password, errorMessage 
  } = useSelector((state) => state.auth);

  return (
    <View style={styles.container}>
      <Spacer />
      <Input
        label="Email"
        value={email}
        onChangeText={(value) => dispatch(emailChanged(value))}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={(value) => dispatch(passwordChanged(value))}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}

      <Spacer>
        <Button
          title="login"
          onPress={() => dispatch(loginUser({email, password}))}
        />
      </Spacer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15,
    textAlign: 'center',
  },
});

export default LoginScreen;

