import React from 'react';
import { View, Text, StyleSheet, Image, Pressable} from 'react-native'

export default function Info2({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Página Info2</Text>
            <Pressable style={styles.botao}
            onPress={() => navigation.goBack()}>
                <Text style={styles.textoBotao}>Voltar para o blog</Text>
            </Pressable>
            <Pressable style={styles.botao} 
            onPress={()=> navigation.navigate('info1')}>
                <Text style={styles.textoBotao}>Abra a tela Info1</Text>
            </Pressable>
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
        justifyContent: "center",
        alignItems: "center",
    },
    textoBotao: {
        color: 'white',
        fontSize: 16,
        justifyContent: "center",
        alignItems: "center",
    },
});