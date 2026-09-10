import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";  

export default function TabRotas(){

    return(
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#A72730",
                tabBarInactiveTintColor: "#64748B",
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Início',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="mapa"
                options={{
                    title: 'Mapa',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="location-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="camera"
                options={{
                    title: 'Escanear',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="scan-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="chatbot"
                options={{
                    title: 'Chat',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="chatbubble-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="perfil"
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}