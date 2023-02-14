import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import BackgroundDisplay from "../components/base/BackgroundDisplay";
import LangueFormulaire from '../components/formulaire/LangueFormulaire';


const LanguageSelect = () => {
    return (
      <View>
        <BackgroundDisplay/> 
        <LangueFormulaire/>
      </View>
    );
};

export default LanguageSelect;