import {StyleSheet} from "react-native";
import {Image, type ImageSource} from "expo-image";

type Props = {
    Nascente: ImageSource;
    selectedImage?: string;
}

export default function Visualizador({Nascente,selectedImage}:Props){
    const imageSource = selectedImage ? {uri: selectedImage}: Nascente;

    return <Image source={imageSource} style={styles.imagem} />
}

const styles = StyleSheet.create({
    imagem:{
        width: 320,
        height: 440,
        borderRadius: 10,
    },
})