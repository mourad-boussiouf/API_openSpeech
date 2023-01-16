/* Import React and React native components  */
import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, useColorScheme,AsyncStorage } from 'react-native';


/* Import React navigation  */
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

/* Import styles dimensions and import function to dimension the splash screen  */
import { dimensions, margin } from './styles/Base';
const calculWidth = (pourcent) => {
    return dimensions.fullWidth - dimensions.fullWidth * pourcent
}

/* Import logo and imageViewer  */
import ImageViewer from './components/base/ImageViewer';
const PlaceholderImage = require('./assets/1.png');

/* Import screens  */
import HomeScreen from './screen/HomeScreen';
import AppLightTheme from './styles/AppLightTheme';
import AppDarkTheme from './styles/AppDarkTheme';
import InscriptionScreen from './screen/InscriptionScreen';
import ListMessages from './screen/ListMessages';
import introStepByStep1 from './screen/introStepByStep1';


// import { LogBox } from 'react-native';
// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs();

export default function App() {

    const colorScheme = useColorScheme();

    const [splashScreen, setSplashScreen] = useState(false)


    console.log(colorScheme)
    useEffect(() => {
        setTimeout(() => {
            setSplashScreen(true)
        }, 500);
    }, [])

    return (

        <NavigationContainer theme={colorScheme === 'light' ? AppLightTheme : AppDarkTheme}>

            {
                splashScreen === true ?
                    <>
                        <StatusBar barStyle={"light-content"}/>
                        <Stack.Navigator screenOptions={{headerShown: false}}>
                            <Stack.Screen name="Home" component={HomeScreen} />
                            <Stack.Screen name="Inscription" component={InscriptionScreen}/>
                            <Stack.Screen name="ListMessages" component={ListMessages}/>
                        </Stack.Navigator>
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
        maxWidth: calculWidth(0.30),
        width: "80%",      
        height: "50%",
        bottom: "7%"
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
