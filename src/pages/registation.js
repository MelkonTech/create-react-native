import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Logo from '../components/logo'
import Form from '../components/forms'

const SignUp = () => {
    return(
        <View style={styles.container}>
            <Logo />
            <Form style={{marginTop: 20}} page={'Login'} />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    logoText: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 18,
    }
  });

export default Login