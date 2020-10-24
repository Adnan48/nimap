import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextInputView from '../component/TextInputView';
import Button from '../component/Button';
import {validateEmail} from '../utils/helpers';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setError] = useState<string>('');

  const onChangeEmail = (text) => {
    if (!validateEmail(text)) {
      setError('Enter valid Email');
      setEmail(text);
    } else {
      setError('');
      setEmail(text);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInputView
          property="Email"
          value={email}
          onChangeText={onChangeEmail}
          errorMsg={emailError}
        />
        <TextInputView
          property="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Login" onPress={() => console.log('Hello')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C2DF5',
    flex: 1,
  },
  loginText: {
    fontSize: 55,
    marginVertical: 50,
    color: '#ffffff',
    marginLeft: 10,
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    marginTop: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
});
