import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import LoginScreen from "react-native-login-screen";


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            switchValue: false,
            username: '',
            password: ''
        }
    }
    render(){
        return(
            <LoginScreen
                onPressLogin={() => alert("Login Button is pressed")}
                onPressSettings={() => alert("Settings Button is pressed")}
                switchValue={this.state.switchValue}
                onSwitchValueChange={() => this.setState({switchValue: !this.state.switchValue})}
                usernameOnChangeText={(username) => this.setState({username: username})}
                passwordOnChangeText={(password) => this.setState({password: password})}
                logoText="PRO PANELS MOBILE"
                disableSettings={true}
                >
               
            </LoginScreen>
        );
    }
}