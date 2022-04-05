import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Linking, ToastAndroid, Image, Platform } from 'react-native'
import HeaderNav from '../Header/HeaderNav'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { useState } from 'react';
import { colors } from '../Utils';
import { showMessage, hideMessage } from "react-native-flash-message";
import { PermissionsAndroid } from 'react-native';
import HeaderAction from '../Header/HeaderAction';

const Scanner = ({ navigation }) => {

    const [onActiv1, setOnActiv1] = useState(false);
    const [QRShow, setQRShow] = useState(true);

    useEffect(async () => {

        if(Platform.OS == 'android'){
            const chckLocationPermission = PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        if (chckLocationPermission === PermissionsAndroid.RESULTS.GRANTED) {
            
        } else {
            try {
                const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                )
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    //alert("You've access for the location");
                } else {
                    //alert("You don't have access for the location");
                }
            } catch (err) {
                alert(err)
            }
        }
        }
        if(Platform.OS == "ios"){
            // your code using Geolocation and asking for authorisation with
            Geolocation.requestAuthorization();
         }else{
            // ask for PermissionAndroid as written in your code
         }

    }, [])

    const onScreen = (e) => {
        if (e) {
            showMessage({
                message: "Berhasil!",
                description: e,
                type: 'success',
                icon: 'success'
            });
            //alert(e)
        } else {
            showMessage({
                message: "Gagal!",
                description: "Qr Code tidak tepat, scan Qr Code yang benar",
                type: "danger",
                icon: 'danger'
            });
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <HeaderAction Tittle={'Kehadiran'} onBack={() => navigation.goBack()}/>
            <QRCodeScanner
                onRead={txt => onScreen(txt.data)}
                cameraStyle={{ height: '100%' }}
                showMarker={true}
                cameraTimeout={3000}
            //flashMode={RNCamera.Constants.FlashMode.torch}
            />
        </View>
    )
}

export default Scanner

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: 'black'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    }
});
