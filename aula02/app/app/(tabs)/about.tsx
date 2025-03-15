import {Link} from 'expo-router';
import {Text, View, StyleSheet} from 'react-native';

export default function AboutScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.Text}>About Screen</Text>
            <Link href="/(tabs)" style={styles.Link}>Go to about screen</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightpink',
    },

    Text:{

    },

    Link: {
        color: 'rgb(255,0,232)',
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline',
        textDecorationColor: 'rgb(255,0,232)',
    },
})  
