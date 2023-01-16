import React from "react";
import { View } from "react-native";
import BackgroundDisplay from "../components/base/BackgroundDisplay";
import ConnexionFormulaire from "../components/formulaire/ConnexionFormulaire";


export default function HomeScreen(){
    return (

        <View>
            <BackgroundDisplay/>
            <ConnexionFormulaire />
        </View>
        
    )
}

