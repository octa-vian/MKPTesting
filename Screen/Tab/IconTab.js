import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../Utils'

const IconTab = ({title, active, onPress, onLongPress})  => {

  const [badge, setBadge] = useState();

  useEffect(()=>{
    //GetBadgeInfo();
  },[title, active])


  // const GetBadgeInfo=()=>{
  //   Api.get('info/badge_info')
  //     .then(async(res)=>{
  //       console.log(res.data.response)
  //       setBadge(res.data.response.jumlah)
  //     })
  //     .catch(err=>{
  //       console.log(err)
  //     })
  // }
  
  const Icon =()=>{
    //GetBadgeInfo();
    if(title === 'Beranda'){
      return active ? <Image source={require('../Icon-navigation/house-show.png')} style={{height:25, width:25}}/> : <Image source={require('../Icon-navigation/house-hide.png')} style={{height:25, width:25}}/>
    }
    if(title=== 'Renungan'){
      return active ? <Image source={require('../Icon-navigation/book-show.png')} style={{height:25, width:25}}/> : <Image source={require('../Icon-navigation/book-hide.png')} style={{height:25, width:25}}/>
    }

    if(title=== 'Kehadiran'){
      return active ? <Image source={require('../Icon-navigation/barcode-scanner.png')} style={{height:25, width:25}}/> : <Image source={require('../Icon-navigation/barcode-scanner.png')} style={{height:25, width:25}}/>
    }
    if(title=== 'Sharing'){
      return active ? 
      <View style={{border:2,borderColor:colors.btnActif, paddingHorizontal:0}}>
      <Image source={require('../Icon-navigation/share-show.png')} style={{height:25, width:25}}/>
      {
      badge > 0 && (
        <View style={{backgroundColor:colors.btnActif, position:'absolute',top:-2,right:-6, padding:1,width:14,height:14, borderRadius:14/2,justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontSize:10,color:'white'}}>{badge}</Text>
        </View>
        )
      }
      </View> 
      : 

      <View style={{border:2,borderColor:colors.btnActif, paddingHorizontal:0}}>
      <Image source={require('../Icon-navigation/share-hide.png')} style={{height:25, width:25}}/>
      {
      badge > 0 && (
        <View style={{backgroundColor:colors.btnActif, position:'absolute',top:-2,right:-6, padding:1,width:14,height:14, borderRadius:14/2,justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontSize:10,color:'white'}}>{badge}</Text>
        </View>
        )
      }
      </View> 
    }
    if(title=== 'Profile'){
      return active ? <Image source={require('../Icon-navigation/profil-show.png')} style={{height:25, width:25}}/> : <Image source={require('../Icon-navigation/profil-hide.png')} style={{height:25, width:25}}/>
    }
    return active ? <Image source={require('../Image/clock.png')} style={{height:30, width:30}}/> : <Image source={require('../Image/clock.png')} style={{height:30, width:30}}/>
  }

  return (
    <TouchableOpacity activeOpacity={0.2} style={styles.container} onPress={onPress} onLongPress={onLongPress} onPressIn={()=>title == 'Notifikasi' ? setBadge(0) : null}>
      <Icon/>
      <View style={{margin:2}}>
      </View>
       <Text style={styles.title(active)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default IconTab

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    
  },
  title:(active)=>({
    fontSize:12,
    color: active ? '#7E3517' : 'black',
  }),
  icon:{
    width:40, height:40,
  }
})