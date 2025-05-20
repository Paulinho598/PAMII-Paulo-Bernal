import React from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';

// >:3 //
// >=3 //

export default class Contador extends React.Component{
    constructor(){
        super();
        this.state = {
            contador: 0,
        };
    };

    Decrementar(){
        this.setState({
            contador: this.state.contador - 1
        });
    };

    Incrementar(){
        this.setState({
            contador: this.state.contador + 1
        });
    }
    render(){
        return(
            <View>
                <View style={styles.texto}>
                    <Text>{this.state.contador}</Text>
                </View>
                
                <View style={styles.botões}>
                    <Button 
                    style={styles.botão1}
                    title="Aumenta"
                    onPress={this.Incrementar.bind(this)}/>

                    <Button 
                    style={styles.botão2}
                    title="Diminui"
                    onPress={this.Decrementar.bind(this)}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    botões:{
        gap: 20,
        top: 220,
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
    },

    texto: {
        alignItems: 'center',
        top: 200,
    },
})