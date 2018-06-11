import React,{Component} from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

export default class BackImage extends Component{
    render(){
            return(
                <Image source={{uri: 'splashscreen_background'}} style={styles.back_image} >
                </Image>
        );
    }
}

const styles = StyleSheet.create({
    back_image: {
        flex: 1,
        // remove width and height to override fixed static size
        resizeMode: 'cover',
        zIndex: -1000
        
    },
    
});
