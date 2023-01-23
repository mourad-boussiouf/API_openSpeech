import React, { useState } from 'react'
import { SafeAreaView, Text, View, FlatList } from 'react-native'
import { useTheme } from '@react-navigation/native';
import { dimensions, margin, padding } from '../../styles/Base';
import { API_USERS } from '../../services/config';
import ValideWarning from '../warning/ValideWarning';
import { useNavigation } from '@react-navigation/native';
import TextContents from './TutoInstructionsTextContents';
import IntroItem from './IntroItem';
import slides from './slides';


const IntroComponent = () => {

    let STORAGE_KEY = [];
    let req = {user :{id :17, role:2, token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vdXJhZCIsInVzZXJJZCI6MTcsImlhdCI6MTY3Mzg5NjMxNiwiZXhwIjoxNjc0NTAxMTE2fQ.AOcg0uIoxwB8vVSogcUhNhkG-H33gX_jE3YHUhjhUtc"}}
    let neverBeenConnected = false;

    const navigation = useNavigation();

    const { colors } = useTheme();


    const calculWidth = (pourcent) => {
        return dimensions.fullWidth - dimensions.fullWidth * pourcent
    }

    const calculHeight = (pourcent) => {
        return dimensions.fullHeight - dimensions.fullHeight * pourcent
    }

    const styles = {
        container: {
            flex: 1,
            justifyContent:'center',
            alignItems: 'center',
            position: "absolute", 
            top: calculHeight(0.568),
            alignSelf: "center",
            color: colors.border,
            height: calculHeight(0.51),
        },
    }
    
    return (
        <View style = {styles.container}>
            <FlatList 
            data = {slides} 
            renderItem = {({ item }) => <IntroItem item = {item}/>}
            horizontal
            showsHorizontalScrollIndicator
            pagingEnabled
            bounces={false}
            />
        </View>        
    );
};

export default IntroComponent;
