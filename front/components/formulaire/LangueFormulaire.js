import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const LangueFormulaire = () => {
  const [selected, setSelected] = useState(null);
  const [value, setValue] = useState('');

  const handleButtonPress = (buttonValue) => {
    setSelected(buttonValue);
    setValue(buttonValue);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={selected === 'en' ? styles.selectedButton : styles.button}
        onPress={() => handleButtonPress('en')}
      >
        <Text style={styles.buttonText}>en</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={selected === 'fr' ? styles.selectedButton : styles.button}
        onPress={() => handleButtonPress('fr')}
      >
        <Text style={styles.buttonText}>fr</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'lightgray',
    padding: 10,
    opacity: 0.5,
  },
  selectedButton: {
    backgroundColor: 'lightgray',
    padding: 10,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default LangueFormulaire;