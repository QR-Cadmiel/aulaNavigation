import React from 'react';
import { View, Text, StyleSheet, Image, Pressable} from 'react-native'

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>O outro lado</Text>
            <Image
            style={styles.logo}
            source={{ uri: 'https://artfiles.alphacoders.com/928/92871.jpg'}}
            />
            <Text style={styles.txtpadrao}>Um portal de desvenda o místico e relata o sobrenatural para os corajosos e os curiosos</Text>
        </View>
    );

}
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000'
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
        alignItems: "center",
    },
    logo: {
        width: 500,
        height: 500,
        resizeMode: 'contain',
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        marginVertical: 10,
        color: 'white',
      },
      txtpadrao: {
        ontSize: 16,
        color: "#fff",
        textAlign: "center",
        marginBottom: 20,
    },
});