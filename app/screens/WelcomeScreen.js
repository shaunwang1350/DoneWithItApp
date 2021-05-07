import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function WelcomeScreen(props) {

    return (
        <ImageBackground 
            style={styles.background}
            source={require('../assets/background.jpg')}>
                <View style={styles.logoContainer}>
                    <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
                    <Text style={{fontWeight:'bold'}}>Sell What You Need</Text>
                </View>
            <TouchableOpacity style={styles.loginButton}>
                <Text style={{fontWeight:'bold', color:'white'}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerButton}>
                <Text style={{fontWeight:'bold', color:'white'}}>Register</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton:{
        width: '100%',
        height: 70,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    registerButton:{
        width: '100%',
        height: 70,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo:{
        width:100,
        height:100,
        bottom: 10
    },
    logoContainer:{
        position: 'absolute',
        top: 200,
        alignItems: 'center'
    }
})

export default WelcomeScreen;
