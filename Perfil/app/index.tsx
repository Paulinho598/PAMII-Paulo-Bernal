  import { useState } from 'react';
  import * as ImagePicker from 'expo-image-picker';
  import { Text ,Button, Image, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

  export default function Index() {
    const [image, setImage] = useState<string | null>(null)

    const pickImage = async() => {
      try{
        let resultado = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['images', 'videos'],
          allowsEditing: true,
          aspect: [1,1],
          quality: 0.8,
        })

        console.log(resultado)

        if(!resultado.canceled && resultado.assets[0]){
          setImage(resultado.assets[0].uri)
        }
      }catch(error){
        console.error("ERRO AO SELECIONAR A IMAGEM:",error)
      }finally{
        setLoading(false)
      }
    }


    return (
      <View style={style.Contâiner}>
        <View style={style.dados}>
          <View>
            <TouchableOpacity onPress={pickImage} style={style.FotoPerfil}>
              {image ? (
                <Image source={{ uri: image }}/>
              ) : (
                <Image source={require('./img/guest.png')} style={style.foto}/>
              )}
            </TouchableOpacity>
          </View>
          <View style={style.inputGroup}>
              <Text style={style.inputText}>Nome:</Text>
              <TextInput style={style.input} placeholder="Jeremias"/>
          </View>
          <View style={style.inputGroup}>
              <Text style={style.inputText}>E-mail:</Text>
              <TextInput style={style.input} placeholder="Jeremias@gmail.com"/>
          </View>
          <View style={style.inputGroup}>
              <Text style={style.inputText}>Telefone:</Text>
              <TextInput style={style.input} placeholder="(00) 12345-6789"/>
          </View>
        </View>
        <View style={style.Botões}>
          <TouchableOpacity style={style.btn}>
            <Text style={style.btnText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const style = StyleSheet.create ({
      Contâiner: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightblue",
      },

      FotoPerfil: {
      },

      foto: {
        width: 150,
        height: 150,
        borderWidth: 2,
        borderRadius: 20,
        marginBottom: 30,
        backgroundColor: "black"
      },

      dados: {
        flex: 1,
        padding: 20,
        marginTop: 180,
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightpink",
      },

      inputGroup: {
        gap: 20,
        marginBottom: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },

      inputText: {
        width: 100,
        fontSize: 15,
        fontWeight: "bold",
      },

      input: {
        width: 200,
        fontSize: 15,
        borderWidth: 2,
        textAlign: "center",
        backgroundColor: "white",
      },

      Botões: {
        gap: 20,
        height: 100,
        marginTop: 150,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
      },

      btn: {
        padding: 15,
        borderWidth: 2,
        borderRadius: 20,
        alignItems: "center",
      },

      btnText: {
      },
  })

function setLoading(arg0: boolean) {
  throw new Error('Function not implemented.');
}
