import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image,
    TextInput,
    TouchableOpacity,
  } from 'react-native';

const Form = () => {
    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.inputBox} 
                placeholder='Email'
                placeholderTextColor='#dcdcdc'
            />

            <TextInput 
                style={styles.inputBox} 
                placeholder='Password'
                placeholderTextColor='#dcdcdc'
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    },
    inputBox: {
      width: 300,
      borderColor: '#dcdcdc',
      borderWidth: 2,
      height: 45,
      borderRadius: 25,
      paddingHorizontal: 25,
      fontSize: 15,
      marginVertical: 10,
      margin: 10,
    },
    button: {
      backgroundColor: '#09e5ab',
      width: 150,
      borderRadius: 25,
    },
    buttonText: {
      textAlign: 'center',
      paddingVertical: 15,
      color: '#ffffff'
    }
    
  });

export default Form