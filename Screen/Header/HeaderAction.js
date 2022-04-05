import React from 'react'
import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { colors } from '../Utils'

const HeaderAction = ({Tittle, gambar, gambar1, onPress, onPress1, deskripsi, onBack}) => {
    return (
        <SafeAreaView style={{backgroundColor:'white'}}>
        <StatusBar backgroundColor={'#1d2f7b'} barStyle={'light-content'}/>
        <View style={{height:48, width:'100%', backgroundColor:'#1d2f7b', justifyContent:'center', paddingLeft:0, paddingRight:10, flexDirection:'row', alignItems:'center'}}>
        <TouchableOpacity style={{padding:10, borderRadius:100, alignItems:'center', justifyContent:'center',}} onPress={onBack}>
            <Image source={require('../Image/arrow.png')} style={{height:25, width:25, resizeMode:'contain'}}/>
        </TouchableOpacity>
        <Text style={{fontSize:18, fontWeight:'bold', color:'white', flex:1, marginLeft:16}}>{Tittle}</Text>

        <View style={{alignItems:'center', justifyContent:'center', padding:10}}>
        <TouchableOpacity style={{borderRadius:100, alignItems:'center', justifyContent:'center',}} onPress={onPress}>
            <Image source={gambar} style={{height:28, width:28, resizeMode:'contain'}}/>
        </TouchableOpacity>
        </View>

        <View style={{alignItems:'center', justifyContent:'center', padding:10}}>
        <TouchableOpacity style={{borderRadius:100, alignItems:'center', justifyContent:'center',}} onPress={onPress1}>
            <Image source={gambar1} style={{height:28, width:28, resizeMode:'contain'}}/>
        </TouchableOpacity>
        </View>
        </View>
        </SafeAreaView>
    )
}

export default HeaderAction
