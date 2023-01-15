import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import TitreViewer from '../base/TitreViewer'
import { useTheme } from '@react-navigation/native';

import { dimensions, margin, padding } from '../../styles/Base';
import Checkbox from 'expo-checkbox';
import ButtonSubmit from '../base/ButtonSubmit';

import { Entypo } from '@expo/vector-icons'; 

import { useNavigation } from '@react-navigation/native';

import * as ImagePicker from 'expo-image-picker';

import { API_USERS } from '../../services/config';
import ValideWarning from '../warning/ValideWarning';



const InscriptionFormulaire = () => {

    const navigation = useNavigation();

    const { colors } = useTheme();

    const [email, onChangeEmail] = useState()
    const [nom, onChangeNom] = useState()
    const [prenom, onChangePrenom] = useState()
    const [password, onChangePassword] = useState()
    const [isCheckedCondi, setCheckedCondi] = useState(false);
    const [isCheckedLetter, setCheckedLetter] = useState(false);
    const [image, setImage] = useState(null)
    const [pseudo, onChangePseudo] = useState()


    const [firstStep, setFirstStep] = useState(true)
    const [secondStep, setSecondStep] = useState(false)

    const [isError, setIsError] = useState(false)
    const [sucessMsg, setSuccessMsg] = useState("")

    const [confirmPassword, onChangeConfirmPassword] = useState()
    const [error, setError] = useState({isError: false, message: ""})
    const [valide, setValide] = useState({isValide: false, message: ""})

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

        image: {
            width: 100,
            height: 100,
            borderRadius: 30
        },
        container: {
            marginTop: margin.xl,
            alignItems: 'center',
            overflow: "hidden"
        },

        entypo: {
            marginTop: 48,
            backgroundColor: colors.text,
            maxWidth: calculWidth(0.45),
            alignSelf: "center",
            paddingHorizontal: padding.l,
            paddingVertical: padding.l,
            borderRadius: 100
        },

        addPhotoLabel: {
            color: colors.background,
            textAlign: "center"
        }

    }

    const onPress = () => {

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        if (!email)
            return setError({isError: true, message:'Veuillez insérer un email'})

        if (reg.test(email) === false)
            return setError({isError: true, message:"Format d'email invalide"})

        if(!nom)
            return setError({isError: true, message:"Veuillez insérer un nom"})

        if(!prenom)
            return setError({isError: true, message:"Veuillez insérer un prénom"})

        if(!password)   
            return setError({isError: true, message: "Veuillez insérer un mot de passe"})

        if(password.length < 6)
            return setError({isError: true, message: "Le mot de passe ne contient pas 6 caractères"})
        
        if(!confirmPassword)
            return setError({isError: true, message: "Veuillez confirmer votre mot de passe"})

        if(password !== confirmPassword)
            return setError({isError: true, message: "Les mots de passes doivent correspondre"})
        
        setFirstStep(false)
        setSecondStep(true)
    }

    const Register = async () => {

        if(!image) 
            return setError({isError: true, message: "Aucun fichier selectionné"})
        
        if(!pseudo)
            return setError({isError: true, message: "Veuillez renseigner un pseudo"})

        if(pseudo.length < 5)
            return setError({isError: true, message: "Votre pseudo doit contenir 6 caractères"})
        
        
        setError({isError: false})

        try {

            let apiUrlRegister = API_USERS + "/register";

            var data = JSON.stringify({
                mail: email,
                pseudo: pseudo,
                password: password,
                firstname: prenom,
                lastname: nom
            })
    
            var opt = {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: (data)
            }
    
            await fetch(apiUrlRegister, opt)
                .then(response => {
                    response.json()
                        .then(data => {
                            console.log(response.status)
                            if (response.status !== 200)
                                return setError({isError: true, message: data.message}), setIsError(true)

                            setValide({isValide: true, message: data.message})                         
                            setIsError(false)
                    });
                
            })

            if(isError === true)
                return setError({isError: true, message: "Erreur durant la traitement"})
            
            let apiUrlUpload = API_USERS + "/upload";

            let uriParts = image.split('.');
            let fileType = uriParts[uriParts.length - 1];

            let formData = new FormData();
            formData.append('profile', {
                name: image ,
                type: "image/jpg",
                uri: image,
            });
            formData.append('pseudo', pseudo)

            let options = {
                method: 'POST',
                body: formData,
            };
            
            await fetch(apiUrlUpload, options).then(function(resp) {

                if (resp.status !== 200)
                    return setError({isError: true, message: "Erreur durant l'upload"})

                setTimeout(() => {
                    navigation.navigate('Home')
                }, 1500);
            });
    
        } catch (error) {
            console.log(error)
        }
    }

    const changePic = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            });
        
            if (!result.canceled) 
                return setImage(result.assets[0].uri), setError({isError: false});
                
            return setError({isError: true, message: "Aucun fichier sélectionné"})
        
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
            {
                firstStep === true ? 
                    <>
                        <TitreViewer titre="Inscription"/>

                        <View style={{top: calculHeight(0.95)}}>

                            <TextInput
                                style={[styles.input, {width: calculWidth(0.25)}]} 
                                onChangeText={onChangeEmail} 
                                value={email} 
                                placeholder="Adresse e-mail" 
                                placeholderTextColor={colors.border}
                            />

                            <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'center', marginTop: margin.s}}>
                                <View style={{flex:1, maxWidth: calculWidth(0.25), flexDirection:'row', justifyContent:'space-between'}}>
                                    <TextInput
                                        style={[styles.input, {width: calculWidth(0.635)}]} 
                                        onChangeText={onChangeNom} 
                                        value={nom} 
                                        placeholder="Nom" 
                                        placeholderTextColor={colors.border}
                                    />
                                    
                                    <TextInput
                                        style={[styles.input, {width: calculWidth(0.635)}]} 
                                        onChangeText={onChangePrenom} 
                                        value={prenom} 
                                        placeholder="Prénom" 
                                        placeholderTextColor={colors.border}
                                    />
                                </View>
                            </View>

                            <TextInput
                                style={[styles.input, {width: calculWidth(0.25), marginTop: margin.s}]} 
                                onChangeText={onChangePassword} 
                                value={password} 
                                placeholder="Mot de passe" 
                                placeholderTextColor={colors.border}
                            />

                            <TextInput
                                style={[styles.input, {width: calculWidth(0.25), marginTop: margin.s}]} 
                                onChangeText={onChangeConfirmPassword} 
                                value={confirmPassword} 
                                placeholder="Confirmez mot de passe" 
                                placeholderTextColor={colors.border}
                            />  

                            <View style={styles.checkboxContainer}>
                                <Checkbox  color={colors.border} style={styles.checkbox} value={isCheckedCondi} onValueChange={setCheckedCondi} />
                                <Text style={styles.label}>J'accepte les termes et conditions.</Text> 
                            </View>

                            <View style={styles.checkboxContainer}>
                                <Checkbox  color={colors.border} style={styles.checkbox} value={isCheckedLetter} onValueChange={setCheckedLetter} />
                                <Text style={[styles.label, {textDecorationLine: 'underline'}]}>M'abonner à la newsletter.</Text> 
                            </View>

                        </View>
                        <ButtonSubmit titre="Suivant" onPress={onPress}/>
                    </>
                : 
                    <>
                        <TitreViewer titre="Une dernière étape" sousTitre="Ajoutez un avatar pour finaliser votre inscription"/> 

                        
                            {
                                image === null ?
                                    <TouchableOpacity onPress={changePic} style={styles.entypo}>
                                        <Entypo name="image" size={40} color={colors.border} />
                                    </TouchableOpacity>
                                :
                                    <Image source={{ uri: image }} style={{ alignSelf: "center", width: 120, height: 120, borderRadius: 75, marginTop: 72}}/>

                            }
                        
                            <TextInput
                                style={[styles.input, {width: calculWidth(0.25), marginTop: 56}]} 
                                onChangeText={onChangePseudo} 
                                value={pseudo} 
                                placeholder="Pseudo" 
                                placeholderTextColor={colors.border}
                            />

                        
                       
                        <ButtonSubmit titre="S'inscrire" onPress={Register} />
                    </>
            }
            
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
                    Vous êtes déjà membre ? 
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text
                        style={{color: colors.background, fontWeight: "bold", marginLeft: margin.xs}}
                    >
                        Connectez-vous
                    </Text>
                </TouchableOpacity>
            </View>
            

        </SafeAreaView>
    )
}

export default InscriptionFormulaire