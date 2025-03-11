import { useState } from 'react';
import { Text ,Button, Image, View, StyleSheet } from 'react-native';

export default function ImagePickerExample() {
  const [image, setImage] = useState<string | null>(null);
  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 4,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "lightblue",
  },
  image: {
    width: 200,
    height: 400,
    borderWidth: 2,
    marginBottom: 200,
  },
});


/*<Button title="Pick an image from camera roll" onPress={pickImage} />

const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ['images', 'videos'],
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.canceled) {
    setImage(result.assets[0].uri);
  }
};

import * as ImagePicker from 'expo-image-picker';
*/