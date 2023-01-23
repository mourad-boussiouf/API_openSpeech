import React, { useState, useRef } from 'react'
import { SafeAreaView, Text, View, FlatList, useColorScheme } from 'react-native'
import { useTheme } from '@react-navigation/native';
import { dimensions, margin, padding } from '../../styles/Base';
import { API_USERS } from '../../services/config';
import ValideWarning from '../warning/ValideWarning';
import { useNavigation } from '@react-navigation/native';
import TextContents from './TutoInstructionsTextContents';
import SvgCharactersDrawRED from './SvgCharactersDrawRED';
import SvgCharactersDrawBLUE from './SvgCharactersDrawBLUE';
import IntroItem from './IntroItem';
import slides from './slides';


const IntroComponent = () => {

    let STORAGE_KEY = [];
    let neverBeenConnected = false;

    const navigation = useNavigation();
    const { colors } =  useTheme();
    const colorScheme = useColorScheme();
    console.log(colorScheme);
    const SvgCharactersDraw = colorScheme === 'light' ?  SvgCharactersDrawRED : SvgCharactersDrawBLUE;

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
            top: calculHeight(0.608),
            alignSelf: "center",
            color: colors.border,
            height: calculHeight(0.70),
        },
        illu : {
            flex: 1,
            justifyContent:'center',
            alignItems: 'center',
            position: "absolute", 
            top: calculHeight(0.88),
            alignSelf: "center",
            color: colors.border,
            height: calculHeight(0.70), 
            paddingLeft : 5,
        }
    }
    
    return (
        <SafeAreaView>
            <View style = {styles.container}>
                <FlatList 
                data = {slides} 
                renderItem = {({ item }) => <IntroItem item = {item}/>}
                horizontal
                showsHorizontalScrollIndicator
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
                />
            </View>
            <View style = {styles.illu}>
                <SvgCharactersDraw/>
            </View>
        </SafeAreaView>        
    );
};

export default IntroComponent;
