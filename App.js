import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Player from './Player'
import Login from './Login'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false
        }
    }
    render(){
        return(
            <View>
                <StatusBar hidden={true} />
                { this.state.loggedIn ?
                    <Player/>:
                    <Login/>
                }
            </View>
        );
    }
}