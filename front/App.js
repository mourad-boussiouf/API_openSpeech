import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ImageViewer from './components/base/ImageViewer';
import HomeScreen from './screen/HomeScreen';
import introStepByStep1 from './screen/introStepByStep1';

const Stack = createNativeStackNavigator();
const PlaceholderImage = require('./assets/1.png');

export default function App() {

    const [splashScreen, setSplashScreen] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setSplashScreen(true)
        }, 500);
    }, [])

    return (

        <NavigationContainer>

            {
                splashScreen === true ?

                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                    <Stack.Screen name="introStepByStep1" component={introStepByStep1} />
                </Stack.Navigator>
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
    }
});
