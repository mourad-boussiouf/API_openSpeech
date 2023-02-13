import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import BackgroundDisplay from "../components/base/BackgroundDisplay";
import IntroComponent from '../components/tutointroductif/IntroComponent';
import '~flag-icons/sass/flag-icons.scss';


const LanguageSelect = () => {
    return (
      <View style={styles.container}>
        <Text>Select language Menu</Text>
      </View>
    );
};

export default LanguageSelect;

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: "#fff",
   justifyContent: "center",
   alignItems: "center",
 },
});

