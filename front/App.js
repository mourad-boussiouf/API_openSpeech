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
import HomeScreen from './screen/Auth/HomeScreen';

import AppLightTheme from './styles/AppLightTheme';
import AppDarkTheme from './styles/AppDarkTheme';
import InscriptionScreen from './screen/Auth/InscriptionScreen';
import ListConversation from './screen/Conversations/ListConversation';
import ConversationIndiv from './screen/Conversations/ConversationIndiv';

import { UserContext } from './context/userContext';

// import { LogBox } from 'react-native';
// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs();

export default function App() {

    const colorScheme = useColorScheme();

    const [splashScreen, setSplashScreen] = useState(false)

    const [context, setContext] = useState("default context value");


    console.log(colorScheme)
    useEffect(() => {
        setTimeout(() => {
            setSplashScreen(true)
        }, 1000);
    }, [])

    return (
        <UserContext.Provider value={[context, setContext]}>
            <NavigationContainer theme={colorScheme === 'light' ? AppLightTheme : AppDarkTheme}>

                {
                    splashScreen === true ?
                        <>
                            <StatusBar barStyle={"light-content"}/>
                            <Stack.Navigator screenOptions={{headerShown: false}}>
                                <Stack.Group>
                                    <Stack.Screen name="Home" component={HomeScreen} />
                                    <Stack.Screen name="Inscription" component={InscriptionScreen}/>   
                                </Stack.Group>
                                <Stack.Group>
                                    <Stack.Screen name="ListMessages" component={ListConversation}/>
                                    <Stack.Screen name="conversation" component={ConversationIndiv}/>
                                </Stack.Group>
                                    
                            </Stack.Navigator>
                            
                        </>
                        
                    :
                        <SafeAreaView style={styles.container}>
                            <ImageViewer PlaceholderImageSource={PlaceholderImage} style={styles.image}/>
                        </SafeAreaView>   
                }
                
                

            </NavigationContainer>
        </UserContext.Provider>
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
