import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import History from '../History/History';
import { colors } from '../Utils';
import TiketKit from '../Tiket/TiketKit';
import TiketKitKendaraan from '../Tiket/TiketKitKendaraan';
import RepoUtil from '../../Helper/RepoUtil';


const Tab = createMaterialTopTabNavigator();

const Beranda = ({ navigation }) => {
    const [search, setSearch] = useState('')
    const [popUpLogout, setPopUpLogout] = useState(false);

    const sendLogout = () => {
        //setView(false)
        RepoUtil.RemoveValue('@username');
        navigation.replace('Login');
    }
    return (
        <View style={styles.page}>
            <SafeAreaView style={{ backgroundColor: 'white' }} />
            <StatusBar backgroundColor={'#1d2f7b'} barStyle={'light-content'} />
            <ImageBackground style={{ backgroundColor: '#1d2f7b' }} source={require('../Image/logo-quarter.png')} imageStyle={{ width: '100%', marginLeft: 100 }}>
                <View style={{ height: 52, width: '100%', justifyContent: 'center', paddingLeft: 16, paddingRight: 16, }}>
                    <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>
                        <TouchableOpacity style={{ height: 30, width: 30, alignItems: 'center', justifyContent: 'center', }} onPress={() => navigation.toggleDrawer()}>
                            <Image source={require('../Image/drawer-white.png')} style={{ height: 22, width: 22, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                        <View style={{ flex: 1, paddingLeft: 8 }} />
                        <TouchableOpacity style={{ height: 30, width: 30, alignItems: 'center', justifyContent: 'center', }} onPress={() => setPopUpLogout(true)}>
                            <Image source={require('../Image/gear.png')} style={{ height: 22, width: 22, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', paddingLeft: 16, paddingRight: 16 }}>
                    <Text style={{ fontSize: 22, fontWeight: '700', color: 'white', }}>MPOS MKP KIT</Text>
                    <Text style={{ fontSize: 13, fontWeight: '400', color: 'white' }}>MKP KIT</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 10, paddingBottom: 8, alignItems: 'center', paddingLeft: 16, paddingRight: 16 }}>
                    <View style={styles.borderText}>
                        <Image source={require('../Image/search.png')} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                        <TextInput
                            onChangeText={(txt) => setSearch(txt)}
                            value={search}
                            style={{ marginLeft: 16, fontSize: 14, color: 'black', width: '100%', fontWeight: '400' }}
                            placeholder="Search"
                            secureTextEntry={true}
                            placeholderTextColor={'gray'}
                        />
                    </View>
                    <TouchableOpacity style={{ height: 30, width: 30, alignItems: 'center', justifyContent: 'center', marginLeft: 8 }} onPress={() => navigation.navigate('Scanner')}>
                        <Image source={require('../Image/qr-code-2.png')} style={{ height: 22, width: 22, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            <View style={{ flex: 1 }}>
                <Tab.Navigator
                    initialRouteName="Top"
                    backgroundColor={'white'}
                    tabBarOptions={{
                        activeTintColor: '#1d2f7b',
                        inactiveTintColor: 'gray',
                        indicatorStyle: {
                            backgroundColor: '#1d2f7b',
                        },
                        tabStyle: {
                            width: 'auto'
                        },
                        labelStyle: { fontSize: 14, fontWeight: 'bold' },
                        style: { backgroundColor: 'white' },

                    }}
                >
                    <Tab.Screen
                        name="Tiket Kit"
                        component={TiketKit} />
                    <Tab.Screen
                        name="Tiket Kit Kendaraan"
                        component={TiketKitKendaraan} />
                </Tab.Navigator>
            </View>

            {popUpLogout ? (
                <TouchableOpacity style={{ flex: 1, height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0, 0.1)', position: 'absolute', justifyContent: 'flex-end' }} onPress={() => setPopUpLogout(false)}>
                    <View style={{ backgroundColor: 'white', borderRadius: 20, marginLeft: 16, marginRight: 16, marginBottom: 18, padding: 16}}>
                    <Text style={{ fontSize: 14, fontWeight: '500', color: 'black', marginLeft:16, marginRight:16, marginBottom:16}}>Apakah anda yakin ingin Logout?</Text>
                    <View style={{padding: 16, flexDirection: 'row' }}>
                        <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => setPopUpLogout(false)}>
                            <Text style={{ fontSize: 14, fontWeight: '500', color: 'black'}}>Tidak</Text>
                        </TouchableOpacity>
                        <View style={{width:1, backgroundColor:'black'}}/>
                        <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => sendLogout()}>
                            <Text style={{ fontSize: 14, fontWeight: '500', color: colors.btnActif}}>Ya, Logout</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                    
                    <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 20, marginLeft: 16, marginRight: 16, marginBottom: 16, padding: 16, alignItems: 'center', justifyContent: 'center' }} onPress={() => setPopUpLogout(false)}>
                        <Text style={{ fontSize: 14, fontWeight: '500', color: 'black' }}>Batal</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            ) : null}
        </View>
    )
}

export default Beranda
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    },
    borderItem: {
        backgroundColor: '#1d2f7b',
    },
    borderText: {
        flexDirection: "row",
        paddingLeft: 16,
        paddingRight: 10,
        borderRadius: 100,
        alignItems: 'center',
        marginTop: 12,
        marginBottom: 20,
        height: 42,
        flex: 1,
        backgroundColor: '#E5E5E5'
    }
})