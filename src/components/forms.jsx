import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image,
    TextInput,
    TouchableOpacity,
  } from 'react-native';

const Form = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.logoText}>Login Doccure</Text>

            <TextInput 
                style={styles.inputBox} 
                placeholder='Email'
                placeholderTextColor='#dcdcdc'
            />

            <TextInput 
                style={styles.inputBox} 
                placeholder='Password'
                secureTextEntry={true}
                placeholderTextColor='#dcdcdc'
            />  

            <TouchableOpacity style={{width: '80%', marginBottom: 10}}>
                <Text style={{textAlign: 'right',}}>Forgot Password ?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.loginOr}>
                <View style={styles.orLoine}></View>
                <View style={styles.spanOr}><Text style={{color: '#a8a8a8'}}>or</Text></View>

            </View>

            <View style={styles.register}>
                <Text>Don’t have an account? </Text>
                <Text style={styles.registerText}>{props.page}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white',
      width: '90%'

    },
    inputBox: {
      width: 250,
      borderColor: '#dcdcdc',
      borderWidth: 2,
      height: 45,
      borderRadius: 7,
      paddingHorizontal: 25,
      fontSize: 15,
      marginBottom: 10,
   
    },
    button: {
      backgroundColor: '#09e5ab',
      width: 150,
      borderRadius: 7,
    },
    buttonText: {
      textAlign: 'center',
      paddingVertical: 15,
      color: '#ffffff'
    },
    logoText: {
      fontSize: 18,
      paddingVertical: 20
  },
  
  loginOr: {
    color: '#a8a8a8',
    marginBottom: 20,
    marginTop: 20,
    paddingBottom: 10,
    paddingTop: 10,
    position: 'relative',
  },

  orLoine: {
    borderColor: '#a8a8a8',
    height: 2,
    marginBottom: 0,
    marginTop: 0,
    borderWidth: 1,
    width: 200
  },
  
  spanOr: {    
    position: 'absolute',
    left: 85,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'white',
    width: 30,
    paddingLeft:5

  },

  register: {
    flex: 1,
    flexDirection: 'row'
  },

  registerText: {
    color: '#09e5ab'
  }
  });

export default Form