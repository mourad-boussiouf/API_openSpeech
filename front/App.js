/* Import React and React native components  */
import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, useColorScheme } from 'react-native';

/* Import React navigation  */
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

/* Import logo and imageViewer  */
import ImageViewer from './components/base/ImageViewer';
const PlaceholderImage = require('./assets/1.png');

/* Import First screen  */
import HomeScreen from './screen/HomeScreen';

import AppLightTheme from './styles/AppLightTheme';
import AppDarkTheme from './styles/AppDarkTheme';

export default function App() {

    const colorScheme = useColorScheme();

    const [splashScreen, setSplashScreen] = useState(false)


    console.log(colorScheme)
    useEffect(() => {
        setTimeout(() => {
            setSplashScreen(true)
        }, 1000);
    }, [])

    return (

        <NavigationContainer theme={colorScheme === 'light' ? AppLightTheme : AppDarkTheme}>

            {
                splashScreen === true ?
                    <>
                        <StatusBar barStyle={"light-content"}/>
                        <HomeScreen />
                    </>
                    
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
