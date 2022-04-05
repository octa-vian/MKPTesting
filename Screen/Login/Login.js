import { View, Text, StyleSheet, Image, ImageBackground, TextInput, Button, TouchableOpacity, ScrollView, StatusBar, ToastAndroid, Platform, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import React, { useEffect, useState } from 'react';
import RepoUtil from '../../Helper/RepoUtil';
import { showMessage, hideMessage } from "react-native-flash-message";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [kodePersahaan, setKodePersahaan] = useState('');
  const [view, setView] = useState(false);
  const [statusColor, setColor] = useState(false);
  const [gagal, setGagal] = useState({
    status: false,
    tittle: '',
    message: ''
  })

  const loadSession = async () => {
    const dataRepo = await RepoUtil.GetAsObject('@username');
    console.log(dataRepo);
    if (dataRepo != null) {
      //alert('Anda Sudah Login');
      navigation.replace('Beranda');
    }
  };

  useEffect(() => {
    loadSession();
  }, [])

  const Validasi = () => {
     if(username == ''){
        showMessage({
        message: "Gagal!",
        description: "Username tidak boleh kosong",
        type: 'danger',
        icon:'danger',
        });
    } else if(username.includes(' ') || username.includes('@') || username.includes('#') || username.includes('!') || username.includes(',') || username.includes('.')){
        showMessage({
        message: "Gagal!",
        description: "Username tidak boleh mengandung [SPASI], atau karakter (# * , .)",
        type: 'danger',
        icon:'danger',
        });
    } else if (password == ''){
        showMessage({
        message: "Gagal!",
        description: "Password tidak boleh kosong",
        type: 'danger',
        icon:'danger',
        });
    } else {
      RepoUtil.StoreAsObject('@username', username);
      navigation.replace('Beranda');
    }
}
  return (
    <>
      <SafeAreaView style={{ backgroundColor: 'white' }} />
      <StatusBar backgroundColor={'#1d2f7b'} barStyle={'light-content'} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View style={styles.page}>
          <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 8, marginTop: 42 }}>
            <Image source={require('../Image/logo-big.png')} style={{ resizeMode: 'contain', width: 100, height: 100 }} />
          </View>

          <View style={{ marginTop: 24, borderTopRightRadius: 20, borderTopLeftRadius: 20, backgroundColor: 'white', width: '100%', paddingTop: 16, paddingLeft: 16, paddingRight: 16, flex: 1 }}>
            <Text style={styles.textTittle}>Login</Text>
            <View style={styles.borderText}>
              <Image source={require('../Image/icon-user.png')} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
              <TextInput
                onChangeText={(txt) => setUsername(txt)}
                value={username}
                style={{ marginLeft: 16, fontSize: 14, color: 'black', width: '100%', fontWeight: '400' }}
                placeholder="Username"
                placeholderTextColor={'gray'}
              />
            </View>

            <Text style={styles.text2}>Password:</Text>
            <View style={styles.borderText}>
              <Image source={require('../Image/icon-pass.png')} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
              <TextInput
                onChangeText={(txt) => setPassword(txt)}
                value={password}
                style={{ marginLeft: 16, fontSize: 14, color: 'black', width: '100%', fontWeight: '400' }}
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor={'gray'}
              />
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 30, }}>
              <TouchableOpacity style={{ height: 46, width: '100%', backgroundColor: 'white', borderRadius: 12, borderColor: '#E5E5E5', borderWidth: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => Validasi()}>
                <Text style={{ color: 'black' }}>Login</Text>
              </TouchableOpacity>
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 30, flexDirection: 'row', }}>
              <Text style={{ color: 'gray' }}>Powered By</Text>
              <Image source={require('../Image/logo-image.png')} style={{ marginLeft: 6, height: 20, width: 70 }} />
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
              <Text style={{ color: 'gray' }}>Versi 3.0.0.2 RELEASE</Text>
            </View>

          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  )
}

export default Login
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#1d2f7b'
  },
  text: {
    fontSize: 24,
    color: '#00CCFF',
    fontWeight: 'bold'
  },
  text2: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold'
  },
  text3: {
    fontSize: 13,
    color: '#6E6E6E',
    fontWeight: 'normal',
    textAlign: 'right',
    marginTop: 18
  },
  textTittle: {
    fontSize: 18,
    color: '#1d2f7b',
    fontWeight: '700',
    textTransform: 'uppercase'
  },
  borderText: {
    flexDirection: "row",
    paddingLeft: 16,
    paddingRight: 10,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 20,
    height: 48,
    backgroundColor: '#E5E5E5'
  }
})