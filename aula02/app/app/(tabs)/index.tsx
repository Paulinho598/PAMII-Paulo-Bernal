import { useRef } from 'react';
import {useState } from 'react';
import {Link} from 'expo-router';
import Cola from '@/componentes/Cola';
import domtoimage from 'dom-to-image';
import Álbum from '@/componentes/Álbum';
import { Platform } from 'react-native';
import Botões from '@/componentes/botão';
import {Image, ImageRef} from 'expo-image';
import { type ImageSource } from 'expo-image';
import Figurinha from '@/componentes/Figurinha';
import * as ImagePicker from 'expo-image-picker';
import BotãoIcone from '@/componentes/BotãoIcone';
import * as MediaLibrary from 'expo-media-library'; 
import { captureRef } from 'react-native-view-shot';
import Visualizador from '@/componentes/visualizador';
import BotãoCircular from '@/componentes/botãoCircular';
import {Text ,Button, View, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Fundo = require('@/assets/images/backImage.jpg')

export default function Index(){
  const imageRef = useRef<View>(null);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined)
  const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(undefined)
  
  const pickImageAsync = async() =>{
    let resultado = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
      allowsEditing: true,
      mediaTypes: ['images'],
    })

    if(!resultado.canceled){
      setSelectedImage(resultado.assets[0].uri)
      setShowAppOptions(true)
    }else{
      alert('Você não selecionou nenhuma imagem.')
    }
  }

  const Resetar = () =>{
    setShowAppOptions(false)
  }
  const Figurinhas = () =>{
    setIsModalVisible(true)
  }
  const Fechamento = () =>{
    setIsModalVisible(false)
  }
  const Salvar = async () =>{
    if (Platform.OS !== 'web') {
      try{
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1
        })

        await MediaLibrary.saveToLibraryAsync(localUri)
        if(localUri){
          alert("Salvo!")
        }
      }catch(e){
        console.log("e")
      }
    }else {
      try {
        const dataUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 0.95,
          width: 320,
          height: 440,
        });

        let link = document.createElement('a');
        link.download = 'sticker-smash.jpeg';
        link.href = dataUrl;
        link.click();
      } catch (e) {
        console.log(e);
      }
    }
  }

  if (status === null) {
    requestPermission();
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.Imagem}>
        <View ref={imageRef} collapsable={false}>
          <Visualizador Nascente={Fundo} selectedImage={selectedImage}/>
          {pickedEmoji && <Cola tamanho={40} nascente={pickedEmoji}/>}
        </View>
      </View>
      {showAppOptions ? (
        <View style={styles.ContainerOpções}> 
          <View style={styles.Opções}>
            <BotãoIcone icone='refresh' legenda='Resetar' evento={Resetar}/>
            <BotãoCircular evento={Figurinhas}/>
            <BotãoIcone icone='save-alt' legenda='Salvar' evento={Salvar}/>
          </View>
        </View>
      ) : (

      <View style={styles.rodapé}>
        <Botões legenda="Escolha a Foto" tema='primary' evento={pickImageAsync}></Botões>
        <Botões legenda="Use Essa Foto" evento={() => setShowAppOptions(true)}></Botões>
      </View>
      )}
      <Figurinha visibilidade={isModalVisible} fechar={Fechamento}>
        <Álbum Selecionado={setPickedEmoji} Fechamento={Fechamento}/>
      </Figurinha>
    </GestureHandlerRootView >
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

  ContainerOpções:{
    position: 'absolute',
    bottom: 80
  },

  Opções:{
    alignItems: 'center',
    flexDirection: 'row'
  }
});