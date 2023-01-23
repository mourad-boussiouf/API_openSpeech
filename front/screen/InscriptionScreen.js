import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import InscriptionFormulaire from '../components/formulaire/InscriptionFormulaire'
import BackgroundDisplay from '../components/base/BackgroundDisplay'

const InscriptionScreen = () => {
  return (
    <View>
        <BackgroundDisplay/>
        <InscriptionFormulaire/>
    </View>
  )
}

export default InscriptionScreen