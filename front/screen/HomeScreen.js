import React from "react";
import { Text, View, StyleSheet } from "react-native";
import BackgroundDisplay from "../components/base/BackgroundDisplay";
import { useTheme } from "@react-navigation/native";
import ConnexionFormulaire from "../components/formulaire/ConnexionFormulaire";


export default function HomeScreen(){

    return (

        <View>
            <BackgroundDisplay/>
            <ConnexionFormulaire />
        </View>
        
    )
}
