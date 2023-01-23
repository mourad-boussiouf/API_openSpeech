import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import ImageViewer from '../base/ImageViewer';
import ButtonNextOctogon from '../base/buttonNextOctogon';
import TextContents from './TutoInstructionsTextContents';
import TutoIntroInstructionsItem from './TutoIntroInstructionsItem';
import SvgNextButtonRED from './SvgNextButtonRED';
import SvgNextButtonBLUE from './SvgNextButtonBLUE';

import { dimensions, margin } from '../../styles/Base';
const calculWidth = (pourcent) => {
    return dimensions.fullWidth - dimensions.fullWidth * pourcent
}
const calculHeight = (pourcent) => {
  return dimensions.fullHeight - dimensions.fullHeight * pourcent
}

const TutoIntroInstructions = () => {

  const colorScheme = useColorScheme();
  const ButtonVersion =  colorScheme === 'light' ? SvgNextButtonRED : SvgNextButtonBLUE;

  const styles = StyleSheet.create({
    container: {
      flex : 1,
      justifyContent:"center",
      alignItems:"center",
    },
    nextButton: {
      width: 70,      
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      elevation: 3,
      top:calculHeight(1),
      marginTop: calculHeight(0.228),
      position:'absolute',
    },
    title: {
      flex: 0.3,
      resizeMode: 'contain',
      fontWeight: '700',
      fontSize: 24,
      color: '#black',
      textAlign: 'center',
      elevation:50,
      marginTop: calculHeight(0.85),
     },
     descr: {
      flex: 0.3,
      resizeMode: 'contain',
      fontWeight: '300',
      fontSize: 14,
      color: '#black',
      textAlign: 'center',
      elevation:50,
     },
  });

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ButtonVersion style ={styles.nextButton}/>
        <Text style={styles.title}>{TextContents[1].title}</Text>
        <Text style={styles.descr}>{TextContents[1].description}</Text>
      </View>
    </SafeAreaView>
  )
}

export default TutoIntroInstructions;