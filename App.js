import * as React from 'react';
import { View, Text, SafeAreaView, StatusBar, Button, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FlashMessage from "react-native-flash-message";
import { enableFreeze } from 'react-native-screens';
import PushNotification, { Importance } from "react-native-push-notification";

import Beranda from './Screen/Beranda/Beranda';
import ControlTab from './Screen/Tab/ControlTab';
import Login from './Screen/Login/Login';
import SplashScreen from './Screen/SplashScreen/SplashScreen';
import firebase from "@react-native-firebase/app";
import History from './Screen/History/History';
import Scanner from './Screen/Scanner/Scanner';

var firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://firebaseapp.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};


const DrawerScreen = () => {
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerPosition: 'left',
          // drawerWidth: '70%',
          // edgeWidth: -100,
          // initialRouteName: 'Stack',
          drawerStyle: {
            width: '65%'
          }

        }}
        initialRouteName="Home">
        <Drawer.Screen name="Home"
          options={{
            drawerIcon: ((color) => (
              <Image source={require('./Screen/Image/house-3.png')} style={{ height: 28, width: 28, resizeMode: 'contain', tintColor: color }} />
            )),
            drawerLabel: () => (
              <Text style={{ flex: 1, fontSize: 13, fontWeight: '500', color: 'black' }}>Beranda</Text>
            )
          }}
          component={Beranda} />
          <Drawer.Screen name="History"
          options={{
            drawerIcon: ((color) => (
              <Image source={require('./Screen/Image/history.png')} style={{ height: 28, width: 28, resizeMode: 'contain', tintColor: color }} />
            )),
            drawerLabel: () => (
              <Text style={{ flex: 1, fontSize: 13, fontWeight: '500', color: 'black' }}>History</Text>
            )
          }}
          component={History} />
      </Drawer.Navigator>
      <SafeAreaView style={{ backgroundColor: 'white' }} />
    </>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      //tabBar={props => <ControlTab {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarStyle:{
          height:60,
          paddingBottom:8,
          paddingTop:8,
        }
      }}>
      <Tab.Screen
      options={{
        tabBarIcon:({color}) => {
          return(
            <Image source={require('./Screen/Icon-navigation/house-hide.png')} style={{height:30, width:30, tintColor:color}}/>
          )
        },
        tabBarIconStyle:() => {

        },
        headerShown:false,
      }}
        name="Beranda"
        component={Beranda}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function App() {
  enableFreeze(true);
  React.useEffect(() => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  PushNotification.createChannel(
    {
      channelId: "isi channel",
      channelName: "isi channel", 
      channelDescription: "A channel to categorise your notifications", 
      playSound: true,
      soundName: "default", 
      importance: 4, 
      vibrate: true, 
    },
    (created) => console.log(`createChannel returned '${created}'`) 
  );

},[])
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }} >
          <Stack.Screen
          name="Splash Screen"
          options={{
            statusBarHidden: true
          }}
          component={SplashScreen}
          />
          <Stack.Screen
            name="Login"
            options={{
              statusBarHidden: true
            }}
            component={Login}
          />
          <Stack.Screen
            name="Draw Screen"
            options={{
              statusBarHidden: true
            }}
            component={DrawerScreen}
          />
          <Stack.Screen
            name="Beranda"
            options={{
              statusBarHidden: true
            }}
            component={DrawerScreen}
          />
          <Stack.Screen
            name="History"
            options={{
              statusBarHidden: true
            }}
            component={History}
          />
          <Stack.Screen
            name="Scanner"
            options={{
              statusBarHidden: true
            }}
            component={Scanner}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <FlashMessage animated={true} position='bottom' />
    </>
  )
}

export default App
