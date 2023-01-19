import React, { useState } from 'react'
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useTheme } from '@react-navigation/native';
import TitreViewer from '../base/TitreViewer';


import Checkbox from 'expo-checkbox';


import { dimensions, margin, padding } from '../../styles/Base';
import ButtonSubmit from '../base/ButtonSubmit';

import { API_USERS } from '../../services/config';
import ValideWarning from '../warning/ValideWarning';

import { useNavigation } from '@react-navigation/native';

const ConnexionFormulaire = () => {

    const navigation = useNavigation();

    const { colors } = useTheme();

    const [email, onChangeEmail] = useState()
    const [password, onChangePassword] = useState()
    const [isChecked, setChecked] = useState(false);
    const [error, setError] = useState({isError: false, message: ""})
    const [valide, setValide] = useState({isValide: false, message: ""})

    const [isError, setIsError] = useState(false)

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

        },

    }

    const onPress = async () => {

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        if (!email)
            return setError({isError: true, message:'Veuillez insérer un email'})

        if (reg.test(email) === false)
            return setError({isError: true, message:"Format d'email invalide"})

        if(!password)   
            return setError({isError: true, message: "Veuillez insérer un mot de passe"})

        setError({isError: false})

        try {

            var data = JSON.stringify({
                mail: email, 
                password: password
            });

            await fetch(API_USERS + '/login', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: (data)
            }).then(response => {

                    response.json()
                        .then(data => {

                            if (response.status !== 200)
                                return setError({isError: true, message: data.message}), setIsError(true), setValide({isValide: false})

                            let currentId = data.user.id

                            const test = JSON.stringify({
                                last_co: new Date()
                            })
                

                            fetch(API_USERS + "/lastCoUser", {
                                method: "PATCH",
                                headers: { 'Content-Type': 'application/json' },
                                body: (test)
                            }).then(response => {
                
                                response.json()
                                    .then(ret => {
                                        if (response.status !== 200)
                                            return setError({isError: true, message: ret.message}), setIsError(true)
                                        
                
                                        setValide({isValide: true, message: ret.message})                         
                                        setIsError(false)
                                        
                                        setTimeout(() => {
                                            navigation.navigate('ListMessages',
                                                {
                                                    id: currentId
                                                }
                                            )
                                        }, 1000);
                                });
                            
                            })
                    });
                
            })

        } catch (error) {
            console.log(error)
        }
        
    }

    return (

        <SafeAreaView>
            {
                error.isError === true ?
                    <View
                        style={{position: "absolute", top: margin.s, alignSelf: "center"}}
                    >
                        <Text style={styles.error}>{error.message}</Text>
                    </View>
                :
                    <></>
            }
            {
                valide.isValide === true ?
                    <ValideWarning message={valide.message}/>
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
                <TouchableOpacity onPress={() => navigation.navigate('Inscription')}>
                    <Text
                        style={{color: colors.background, fontWeight: "bold", marginLeft: margin.xs}}
                    >
                        Inscrivez-vous
                    </Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    )
}

export default ConnexionFormulaire