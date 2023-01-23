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

    const data = [  {
        id: 1,
        title : "Qu'es ce que Open Speech ?",
        description : "C'est est une application de chat en ligne qui permet d'automatiquement traduire les conversations.",
        image: require('../../assets/introStepByStepRessources/pngIntro.png')
    },
    {
        id: 2,
        title : "Les frontières n'ont plus de limites",
        description : "Plus la peine de passer de longues minutes à traduire des messages, notre application s'en charge pour vous.",
        image: require('../../assets/introStepByStepRessources/pngIntro.png')
    },
    {
        id: 3,
        title : "Think once.",
        description : "Interagissez avec la communauté sur de nombreux sujets sans barrières de langues.",
        image: require('../../assets/introStepByStepRessources/pngIntro.png')
    },
    {
        id: 4,
        title : "Prêt ?",
        description : "Nous allons vous inviter à paramétrer votre langue utilisée. D'autres langues seront disponibles à l'avenir, bon chat !",
        image: require('../../assets/introStepByStepRessources/pngIntro.png')
    }];

    let STORAGE_KEY = [];
    let req = {user :{id :17, role:2, token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vdXJhZCIsInVzZXJJZCI6MTcsImlhdCI6MTY3Mzg5NjMxNiwiZXhwIjoxNjc0NTAxMTE2fQ.AOcg0uIoxwB8vVSogcUhNhkG-H33gX_jE3YHUhjhUtc"}}
    let neverBeenConnected = false;


/*     const permuteNewTokenFromOldOne = async (item, selectedValue) => {
        try {
          await AsyncStorage.setItem(item, selectedValue);
        } catch (error) {
          console.log('AsyncStorage error: ' + error.message);
        }
    } */

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
        },
    }
    
    return (

        <View style = {styles.container}>
                        <Text
                style={{position: "absolute", top: calculHeight(0.33), alignSelf: "center", color: colors.border}}
            >
                Mot de passe oublié ?
            </Text>
            <View style={{position: "absolute", top: calculHeight(0.52), alignSelf: "center", color: colors.border}}>
            <FlatList data = {slides} renderItem = {({ item }) => <IntroItem item = {item}/>} />
            </View>
        </View>

        
    );
};

export default IntroComponent;
