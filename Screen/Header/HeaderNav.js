import React from 'react'
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image } from 'react-native'
import { color } from 'react-native-reanimated'
import { colors } from '../Utils'

const HeaderNav = ({Tittle, gambar, onPress, deskripsi}) => {
    return (
        <SafeAreaView style={{backgroundColor:'white'}}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
        <View style={{height:60, width:'100%', backgroundColor:'white', justifyContent:'center', paddingLeft:24, paddingRight:24, flexDirection:'row', alignItems:'center'}}>
        <Text style={{fontSize:18, fontWeight:'bold', color:'black', flex:1}}>{Tittle}</Text>
        <View style={{alignItems:'center', justifyContent:'center', padding:10}}>
        <TouchableOpacity style={{borderRadius:100, alignItems:'center', justifyContent:'center',}} onPress={onPress}>
            <Image source={gambar} style={{height:20, width:20, resizeMode:'contain'}}/>
        </TouchableOpacity>
        <Text style={{fontSize:11, fontWeight:'500', color:'black', textAlign:'center'}}>{deskripsi}</Text>
        </View>
        </View>
        </SafeAreaView>
    )
}

export default HeaderNav
