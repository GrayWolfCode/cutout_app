import {StyleSheet, View, Text, Image} from 'react-native'
import React from 'react'
import Colors from './../../constants/Colors'
export default function LoginScreen() {
    return (
        <View>
            <Image source={require('./../../assets/images/login.jpeg')}
              style={{
                width: '100%',
                height: 600
              }}  
            />

            <View style={styles.loginContainer}>
                <Text style={{
                    fontSize:25,
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}
                >Welcome to The Photo Saver</Text>

                <Text style={{
                    color: Colors.GRAY,
                    marginTop:15,
                    textAlign: 'center'
                }}>Create AI Art in Just on Click</Text>

                <View style={styles.button}>
                    <Text style={{
                        textAlign: 'center', 
                        color: "white",
                        fontSize: 17
                        }}>Continue</Text>
                </View>

                <Text style={{
                    textAlign: 'center',
                    marginTop: 20,
                    fontSize:13,
                    color:Colors.GRAY
                }}>By continuing you agree to ours terms and conditions</Text>
            </View>
        </View>
    )
}
const styles= StyleSheet.create({
    loginContainer:{
        padding:25,
        marginTop:-20,
        backgroundColor: 'white',
        height: 600,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    button: {
        width: '100%',
        padding: 20,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 40,
        marginTop:20
    }
})