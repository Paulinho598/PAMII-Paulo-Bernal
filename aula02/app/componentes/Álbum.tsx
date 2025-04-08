import { useState } from 'react';
import { Image, type ImageSource } from 'expo-image';
import { StyleSheet, FlatList, Platform, Pressable } from 'react-native';

type Props = {
  Selecionado: (image: ImageSource) => void;
  Fechamento: () => void;
};

export default function EmojiList({ Selecionado, Fechamento }: Props) {
  const [emoji] = useState<ImageSource[]>([
    require("../assets/images/figurinhas/1453-neon-smug.png"),
    require("../assets/images/figurinhas/2124-neon-cry.png"),
    require("../assets/images/figurinhas/2814-neon-owo.png"),
    require("../assets/images/figurinhas/4828-neonconfused.png"),
    require("../assets/images/figurinhas/5135-neon-pout.png"),
    require("../assets/images/figurinhas/5550-neonpet.png"),
    require("../assets/images/figurinhas/6398-neonconfused.png"),
    require("../assets/images/figurinhas/6398-neonevil.png"),
    require("../assets/images/figurinhas/6398-neonpissed.png"),
    require("../assets/images/figurinhas/7571-neonamazed.png"),
    require("../assets/images/figurinhas/8817-neonbot-valorant.png"),

    require("../assets/images/figurinhas/2214-sagecry-valorant.gif"),
    require("../assets/images/figurinhas/8517-sagecry.png"),
    require("../assets/images/figurinhas/2258-sage-peek.png"),
    require("../assets/images/figurinhas/6239-sage-popcorn.png"),
    require("../assets/images/figurinhas/7541-sage-shy.png"),
    require("../assets/images/figurinhas/7541-sage-trash.png"),
    require("../assets/images/figurinhas/9306-sageheart.png"),

    require("../assets/images/figurinhas/3801-jettthinking.png"),
    require("../assets/images/figurinhas/9878-jettsleepy.png"),

    require("../assets/images/figurinhas/7064-killjoyglasses-valorant.gif"),
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            Selecionado(item);
            Fechamento();
          }}>
          <Image source={item} key={index} style={styles.imagem} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imagem: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
