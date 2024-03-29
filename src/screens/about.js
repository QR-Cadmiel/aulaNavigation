import React from 'react';
import { View, Text, StyleSheet, Image, Pressable} from 'react-native'

export default function About() {
    return (
        <View style={styles.container}>
            <Text>Página About</Text>
        </View>
    );

}
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    botao: {
        padding: 20,
        width: 200,
        height: 40,
        backgroundColor: '#FF0000',
        alignItems: "center",
    },
    textoBotao: {
        color: 'white',
        fontSize: 16,
    },
});