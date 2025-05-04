import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // You can change to FontAwesome, MaterialIcons, etc.
import { Colors } from '../../assets/Colors';

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.PRIMARY,
                tabBarInactiveTintColor: Colors.dark.text,
                headerTitleAlign: 'center',
                tabBarStyle: {
                    backgroundColor: Colors.SECONDARY,
                    paddingBottom: 14,
                    height: 70,
                    borderTopWidth: 0,
                },
               tabBarLabelStyle: {
                    
                    fontSize: 14,
                    fontWeight: 'bold',
                   
                },
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 40,
                },
                
                
            }}


        >

<Tabs.Screen
                name="Home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="History"
                options={{
                    title: "History",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="time-outline" size={size} color={color} />
                    ),
                }}
            />
           
            <Tabs.Screen
                name="Profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" size={size} color={color}  />
                    ),
                }}
            />
        </Tabs>
    );
}
