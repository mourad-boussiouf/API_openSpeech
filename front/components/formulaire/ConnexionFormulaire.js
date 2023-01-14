import React, { useState } from 'react'
import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useTheme } from '@react-navigation/native';
import TitreViewer from '../base/TitreViewer';

import Checkbox from 'expo-checkbox';


import { dimensions, margin, padding } from '../../styles/Base';
import ButtonSubmit from '../base/ButtonSubmit';

const ConnexionFormulaire = () => {

    const { colors } = useTheme();

    const [email, onChangeEmail] = useState()
    const [password, onChangePassword] = useState()
    const [isChecked, setChecked] = useState(false);
    const [error, setError] = useState({isError: false, message: ""})

    const calculWidth = (pourcent) => {
        return dimensions.fullWidth - dimensions.fullWidth * pourcent
    }

    const calculHeight = (pourcent) => {
        return dimensions.fullHeight - dimensions.fullHeight * pourcent
    }

    const styles = {
        input: {
            borderWidth: 1,
            borderColor: colors.border,
            alignSelf: "center",
            height: 48,
            paddingLeft: padding.m,
            borderRadius: 10,
            fontSize: 14,
            fontWeight: "light",
            letterSpacing: 0.3,
            color: colors.primary,
        },
        checkboxContainer: {
            flexDirection: "row",
            width: calculWidth(0.25),
            alignSelf: "center",
            marginTop: margin.m
        },

        checkbox: {
            borderWidth: 1,
            borderColor: "red",
            borderRadius: 4
        },

        label: {
            marginLeft: margin.s,
            color: colors.border
        },

        error: {
            color: colors.error,
            textAlign: "center",

        }
    }

    const onPress = () => {
        console.log(password)

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        if (!email)
            return setError({isError: true, message:'Veuillez insérer un email'})

        if (reg.test(email) === false)
            return setError({isError: true, message:"Format d'email invalide"})

        if(!password)   
            return setError({isError: true, message: "Veuillez insérer un mot de passe"})

        const data = {mail: email, password: password}
        console.log("requête avec :" , data)
        setError({isError: false})
    }

    return (

        <SafeAreaView>
            {
                error.isError === true ?
                    <View
                        style={{position: "absolute", top: margin.xs, alignSelf: "center"}}
                    >
                        <Text style={styles.error}>{error.message}</Text>
                    </View>
                :
                    <></>
            }
            
            <TitreViewer titre="Connexion"  sousTitre="Formulaire" />
            
            <View style={{top: calculHeight(0.89)}}>

                <TextInput 
                    style={[styles.input, {width: calculWidth(0.25)}]} 
                    onChangeText={onChangeEmail} 
                    value={email} 
                    placeholder="Adresse e-mail" 
                    placeholderTextColor={colors.border}
                />
            
                <TextInput 
                    style={[styles.input, {width: calculWidth(0.25), marginTop: margin.m}]}
                    onChangeText={onChangePassword} 
                    value={password} 
                    secureTextEntry={true} 
                    placeholder="Mot de passe"
                    placeholderTextColor={colors.border}
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <View style={styles.checkboxContainer}>
                    <Checkbox  color={colors.border} style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
                    <Text style={styles.label}>Se souvenir de moi ?</Text> 
                </View>
                
                

            </View>

            <Text
                style={{position: "absolute", top: calculHeight(0.33), alignSelf: "center", color: colors.border}}
            >
                Mot de passe oublié ?
            </Text>
            
            
            <ButtonSubmit titre="Se connecter" onPress={onPress}/>

            <View
                style={{
                    position: "absolute", 
                    top: calculHeight(0.065), 
                    alignSelf: "center", 
                    flexDirection: "row"
                }}
            >
                <Text
                    style={{color: colors.background}}
                >
                    Pas encore inscrit ? 
                </Text>
                <Text
                    style={{color: colors.background, fontWeight: "bold", marginLeft: margin.xs}}
                >
                    Inscrivez-vous
                </Text>
            </View>
            
        </SafeAreaView>
    )
}

export default ConnexionFormulaire