import { View } from 'react-native';
import { type ImageSource } from 'expo-image';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

type Props = {
  tamanho: number;
  nascente: ImageSource;
};

export default function Cola({ tamanho, nascente }: Props) {
  const escala = useSharedValue(tamanho);

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (escala.value !== tamanho * 2) {
        escala.value = escala.value * 2;
      } else {
        escala.value = Math.round(escala.value / 2);
      }
    });

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(escala.value),
      height: withSpring(escala.value),
    };
  });

  const drag = Gesture.Pan().onChange(event => {
    translateX.value += event.changeX;
    translateY.value += event.changeY;
  });
  
  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });
  
  return (
    <GestureDetector gesture={drag}>
      <Animated.View style={[containerStyle, { top: -350 }]}>
        <GestureDetector gesture={doubleTap}>
          <Animated.Image
            source={nascente}
            resizeMode="contain"
            style={[imageStyle, {width: tamanho, height: tamanho}]}
          />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
}