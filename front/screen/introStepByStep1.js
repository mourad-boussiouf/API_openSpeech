import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TutoIntroIllustration from '../components/tutointroductif/TutoIntroIllustration';

const IntroStepByStep1 = () => {
    const navigation = useNavigation();

    return (
        <View >
            
            <Text style={{color: "blue"}}>Etape 1 stepbystep</Text>
            <Button
            title="Go step to step 2"
            onPress={() => navigation.navigate('IntroStepByStep2')}
            />
            <TutoIntroIllustration/>
        </View>
    )
}

export default IntroStepByStep1

