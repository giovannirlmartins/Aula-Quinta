import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Welcome1  from "../pages/welcome1";
import  Welcome2  from "../pages/welcome2";
import  Welcome3  from "../pages/welcome3";
import  SignIn    from "../pages/signin";
import  SignUp    from "../pages/signup";
import OngSignUp  from "../pages/OngSignUp";
import OngSignUp2 from "../pages/OngSignUp2";
import Home from "../pages/app/home";
import Post from "../pages/app/post";
import Profile from "../pages/app/profile";
import Search from "../pages/app/search";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyApp(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Post" component={Post} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

export default function LoginRoutes() {
    
    return(
        
        <Stack.Navigator>
            <Stack.Screen
              name="Welcome1"
              component={Welcome1}
              options={{headerShown: false}}
            />

        <Stack.Screen
              name="Welcome2"
              component={Welcome2}
              options={{headerShown: false}}
            />

        <Stack.Screen
            name="Welcome3"
            component={Welcome3}
            options={{headerShown: false}}
        />

        <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
        />

        <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
        />   

        <Stack.Screen
            name="OngSignUp"
            component={OngSignUp}
            options={{headerShown: false}}
        />    

        <Stack.Screen
            name="OngSignUp2"
            component={OngSignUp2}
            options={{headerShown: false}}
        />     

         <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="Post"
            component={Post}
            options={{headerShown: false}}
        />

        <Stack.Screen
            name="Search"
            component={Search}
            options={{headerShown: false}}
        />

        <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
        />

        <Stack.Screen
            name="MyApp"
            component={MyApp}
            options={{headerShown: false}}
        />     

        </Stack.Navigator>
    )    
}
