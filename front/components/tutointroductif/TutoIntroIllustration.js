import { View, Text } from 'react-native'
import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import ImageViewer from '../base/ImageViewer';
import TutoIntroInstructions from './TutoIntroInstructions';
const svgIntro = require('../../assets/introStepByStepRessources/svgIntro.svg');
import SvgComponent from './SvgComponent';
import { dimensions, margin } from '../../styles/Base';
const calculWidth = (pourcent) => {
    return dimensions.fullWidth - dimensions.fullWidth * pourcent
}
const calculHeight = (pourcent) => {
  return dimensions.fullHeight - dimensions.fullHeight * pourcent
}

const tutoIntroIllustration = () => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
        <SvgComponent style = {styles.image}/>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  image: {
      width: "80%",   
      height: "2500%",
      justifyContent: 'center',
      left:3,
      top: 30,
  },
  container: {
      flex: 1,
      width: dimensions.fullWidth+10,      
      height: dimensions.fullHeight+10,
      alignItems: 'center',
      justifyContent: 'center',
      bottom: calculHeight(1.175),
  }
});

export default tutoIntroIllustration