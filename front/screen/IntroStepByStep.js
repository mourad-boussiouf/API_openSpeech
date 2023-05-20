import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import BackgroundDisplay from "../components/base/BackgroundDisplay";
import IntroComponent from '../components/tutointroductif/IntroComponent';

export default function IntroStepByStep(){
    return (
        <View>
            <BackgroundDisplay/> 
            <IntroComponent/>
        </View>
    );
};