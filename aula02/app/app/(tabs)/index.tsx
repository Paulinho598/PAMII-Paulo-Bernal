import {useState } from 'react';
import {Link} from 'expo-router';
import {Image} from 'expo-image';
import Botões from '@/componentes/botão';
import * as ImagePicker from 'expo-image-picker'
import Visualizador from '@/componentes/visualizador';
import {Text ,Button, View, StyleSheet } from 'react-native';

const Fundo = require('@/assets/images/backImage.jpg')

export default function Index(){
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined)

  const pickImageAsync = async() =>{
    let resultado = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
      allowsEditing: true,
      mediaTypes: ['images'],
    })

    if(!resultado.canceled){
      setSelectedImage(resultado.assets[0].uri)
    }else{
      alert('Você não selecionou nenhuma imagem.')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.Imagem}>
        <Visualizador Nascente={Fundo} selectedImage={selectedImage}/>
      </View>

      <View style={styles.rodapé}>
        <Botões legenda="Escolha a Foto" tema='primary' evento={pickImageAsync}></Botões>
        <Botões legenda="Use Essa Foto" tema='primary'></Botões>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "lightblue",
  },

  Imagem:{
    flex: 1,
    paddingTop: 28,
  },

  Link:{
    color: 'darkblue',
    textDecorationStyle: 'solid',
    textDecorationColor: 'darkblue',
    textDecorationLine: 'underline',
  },

  rodapé:{
    flex:1/3,
    alignItems: 'center',
  },

});



/*<Text>Home Screen</Text>
<Link href="/(tabs)/about" style={styles.Link}>Go to about screen</Link>*/