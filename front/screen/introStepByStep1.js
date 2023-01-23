import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from "react-native";
import BackgroundDisplay from "../components/base/BackgroundDisplay";
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TutoIntroIllustration from '../components/tutointroductif/TutoIntroIllustration';
import TutoIntroInstructions from '../components/tutointroductif/TutoIntroInstructions';

const IntroStepByStep1 = () => {
    const navigation = useNavigation();

    return (
        <View >
            <BackgroundDisplay/>
            <TutoIntroIllustration/>
            <TutoIntroInstructions/>
        </View>
    )
}

export default IntroStepByStep1

