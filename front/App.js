import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import ImageViewer from './components/base/ImageViewer';
const PlaceholderImage = require('./assets/1.png');

import HomeScreen from './screen/HomeScreen';

export default function App() {

    const [splashScreen, setSplashScreen] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setSplashScreen(true)
        }, 1000);
    }, [])

    return (

        <NavigationContainer>

            {
                splashScreen === true ?
                    <HomeScreen/>
                :
                    <SafeAreaView style={styles.container}>
                        <ImageViewer PlaceholderImageSource={PlaceholderImage} style={styles.image}/>
                    </SafeAreaView>   
            }
            
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "80%",
        height: "50%",
        bottom: "7%"
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
