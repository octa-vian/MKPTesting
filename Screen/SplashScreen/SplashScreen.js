import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import RepoUtil from '../../Helper/RepoUtil';

const SplashScreen = ({navigation}) => {

    const [session, setSession] = useState(null);

    const loadSession = async () => {
    const dataRepo = await RepoUtil.GetAsObject('@username');
    console.log(dataRepo);
    if (dataRepo != null) {
        //alert('Anda Sudah Login');
        setTimeout(() => {
            navigation.replace('Beranda');
        }, 3500);
    } else {
        setTimeout(() => {
            navigation.replace('Login');
        }, 3500)
    }
    };

    useEffect(() => {
        loadSession();
    },[])

  return (
    <View style={styles.page}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
        <View style={{alignItems:'center', justifyContent:'center'}}>
            <Image source={require('../Image/logo-big.png')} style={{height:100, width:100, resizeMode:'contain'}}/>
        </View>
    </View>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    }
})
