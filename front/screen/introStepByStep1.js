import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function introStepByStep1( ){
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <Text style={{color: "black"}}>Etape 1 stepbystep</Text>

        <Button style={styles.container}
        title="Go step to step 2"
        onPress={() => createNativeStackNavigator.navigate('introStepByStep2')}
        />
        </View>
    )
}