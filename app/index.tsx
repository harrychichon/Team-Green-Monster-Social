import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
    return (
        <View style={style.container}>
            <Text style={style.text}>This is Home Screen</Text>
        </View>
    );
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffe6f0' //rosa
    },
    text: {
        color: '#89CFF0',
        fontSize: 24
    },
});