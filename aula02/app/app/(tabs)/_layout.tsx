import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return(
    <Tabs screenOptions={{
        tabBarActiveTintColor: 'ffd33d',
        headerShadowVisible: false,
    }}>

        <Tabs.Screen
            name='index'
            options={{
                title:'Home',

                headerStyle:{
                    backgroundColor: 'lightblue',
                },
                headerTintColor: 'lightblue',
                tabBarStyle:{
                    backgroundColor: 'lightblue',
                },

                tabBarIcon: ({color, focused}) => (
                    <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                ),
            }}/>

        <Tabs.Screen
            name='about'
            options={{
                title:'About',

                headerStyle:{
                    backgroundColor: 'lightpink',
                },
                headerTintColor: 'lightpink',
                tabBarStyle:{
                    backgroundColor: 'lightpink',
                },

                tabBarIcon: ({color, focused}) => (
                    <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
                ),
            }}/>

    </Tabs>
  )
}
