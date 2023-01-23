import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default Paginatorr = () => {
    return (
        <View style={styles.container}>
            <Text>Paginator</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        position: "absolute", 
        top: calculHeight(0.599),
        alignSelf: "center",
        height: calculHeight(0.70),
    },  
});

