import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function SettingsScreen() {
    return (
        <ImageBackground
            source={require('../assets/background.png')} // Path to your background image
            style={styles.background}
            resizeMode="contain" // Adjust the image scaling (options: 'cover', 'contain', 'stretch')
        >
            <View style={styles.overlay}>
                <Text style={styles.text}>Settings Screen</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        top: 180,
    },
});
