import { Stack, Tabs } from "expo-router"
import Ionicons from "@expo/vector-icons/Ionicons"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function RootLayout() {
  return(
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Sala",
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome5 name="couch" size={24} color="black" />
          )
        }}
      />
      
      <Tabs.Screen
        name="Pagina2"
        options={{
          title: "Cozinha",
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome5 name="hamburger" size={24} color="black" />
          )
        }}
      />

      <Tabs.Screen
        name="Pagina3"
        options={{
          title: "Banheiro",
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome6 name="shower" size={24} color="black" />
          )
        }}
      />

      <Tabs.Screen
        name="Pagina4"
        options={{
          title: "Quarto",
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="bed" size={24} color="black" /> 
          )
        }}
      />
    </Tabs>
  )
}