import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import introStepByStep1 from './introStepByStep1';

const Stack = createNativeStackNavigator();

export default function HomeScreen( ){
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={{color: "red"}}>Home screen</Text>

        <Button style={styles.testbutton}
        title="Go step to step"
        onPress={() => navigation.navigate('introStepByStep1')}
        />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    testbutton:  {
        width: "5px",
        height: "3px",
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'right',
        justifyContent: 'center',
    }

});