import React from 'react';
import { View, StyleSheet, useWindowDimensions, useColorScheme, Animated } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { dimensions, margin, padding } from '../../styles/Base';

const Paginator = ({data, scrollX, theme}) => {

    const { width } = useWindowDimensions();
    const { colors } = useTheme();
    const { colorScheme } = useColorScheme();

    const calculWidth = (pourcent) => {
        return dimensions.fullWidth - dimensions.fullWidth * pourcent
    }

    const calculHeight = (pourcent) => {
        return dimensions.fullHeight - dimensions.fullHeight * pourcent
    }

    const styles = StyleSheet.create({
        container: {
            flex:  1,
            flexDirection: 'row',
            alignItems: 'center',
            position: "absolute", 
            top: calculHeight(0.365),
            alignSelf: "center",
            height: 64,
        }, 
        dot: {
            height: 9,
            borderRadius: 4.5,
            backgroundColor: theme === 'light' ? '#FFA69E' : '#CCE6F4',
            marginHorizontal: 6.33,
        },
    });

    return (
        <View style={styles.container}>
          {data.map((_, i) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
            
            const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [10, 20, 10],
                extrapolate: 'clamp',
            });

            const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.35,1,0.35],
                extrapolate: 'clamp',
            })

            return <Animated.View 
                style={[
                    styles.dot, {
                        width: dotWidth,
                        opacity, },
                    ]} 
                key={i.toString()}
            />;
          })}
        </View>
    );
};

export default Paginator;