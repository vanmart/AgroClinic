import React, {Component} from 'react'
import {View, StyleSheet, Image, Text} from 'react-native'
import BackImage from '../config/backImage'
export default class Logo extends Component         {
    render(){
        return(
            <View>
                <Image source={{uri: 'splashIcon'}} style={styles.img_size}/>
                <Text>Red P Colombia</Text>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    img_size:{
        width: 100,
        height: 100
    }
});