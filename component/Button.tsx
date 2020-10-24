import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

interface Props {
    onPress: () => void;
    title: string;
}

export default function Button({onPress, title}: Props){
    return(
        <TouchableOpacity 
        onPress={onPress}
        style={styles.container} >
            <Text style={styles.textStyle} >{title}</Text>
            </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container:{
            backgroundColor: '#0040ff', 
            height: 50, 
            width: '40%', 
            alignItems: 'center', 
            justifyContent: 'center', 
            borderRadius: 5, 
            marginTop: 10
        },
    textStyle:{
        color: '#ffffff',  fontSize: 20    }
});