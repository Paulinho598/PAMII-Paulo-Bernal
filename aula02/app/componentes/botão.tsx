import FontAwasome from '@expo/vector-icons/FontAwesome';
import {StyleSheet, View, Pressable, Text} from 'react-native';

type Props = {
    legenda: string
    tema?: 'primary'
    evento?: () => void;
}

export default function Botões({legenda, tema, evento}:Props){
    if(tema === 'primary'){
        return(
            <View style={[
                styles.container,
                { borderWidth: 4, borderColor: '#black', borderRadius: 18 },
                ]}>

                <Pressable style={styles.botão} onPress={evento}>
                    <FontAwasome name='picture-o' size={18} color={'#25292e'} style={styles.icone}/>
                    <Text style={styles.texto}>{legenda}</Text>
                </Pressable>
            </View>
        )   
    }
}

const styles = StyleSheet.create({
    container:{ 
        width: 200,
        height: 68,
        padding: 3,
        marginBottom: 10,
        alignItems: 'center',
        marginHorizontal: 20,
        justifyContent: 'center',
    },
    
    botão:{
        width: '100%',
        height: '100%',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    texto:{
        fontSize: 16,
    },

    icone:{
        paddingRight: 5,
    },
})