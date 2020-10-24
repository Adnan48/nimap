import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

interface Props {
  property: string;
  value: string;
  onChangeText: (text: string) => void;
  errorMsg?: string;
}

export default function TextInputView({
  property,
  value,
  onChangeText,
  errorMsg,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{property}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.textInput}
      />
      <Text style={{color: 'red', textAlign: 'center'}}>{errorMsg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '60%',
    margin: 20,
  },
  textStyle: {
    fontSize: 20,
    marginBottom: 5,
    color: '#1C2DF5',
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: '#1C2DF5',
  },
});
