import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderAction from '../Header/HeaderAction'

const History = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <HeaderAction Tittle={'History'} onBack={() => navigation.goBack()} />
            <View style={styles.body}>
                <View style={styles.borderWhite}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 16, fontWeight: '700', color: 'black' }}>Laporan Penjualan</Text>
                            <View style={{ flexDirection: 'row', marginTop: 12, alignItems: 'center' }}>
                                <Image source={require('../Image/icon-scanlog.png')} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                                <Text style={{ fontSize: 13, fontWeight: '700', color: 'black', marginLeft: 12, }}>06-04-2022</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{ padding: 12, backgroundColor: '#1d2f7b', borderRadius: 8 }}>
                            <Text style={{ color: 'white', fontSize: 13, fontWeight: '700' }}>Periode Laporan</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 24 }}>
                        <Text style={{ color: 'gray', fontSize: 13, fontWeight: '700', flex: 1 }}>Total Transaksi</Text>
                        <Text style={{ color: 'gray', fontSize: 13, fontWeight: '700', flex: 1, textAlign: 'right' }}>0.00</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 24 }}>
                        <Text style={{ color: 'gray', fontSize: 13, fontWeight: '700', flex: 1 }}>Total Tunai</Text>
                        <Text style={{ color: 'gray', fontSize: 13, fontWeight: '700', flex: 1, textAlign: 'right' }}>0.00</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 24 }}>
                        <Text style={{ color: 'gray', fontSize: 13, fontWeight: '700', flex: 1 }}>Total QRIS</Text>
                        <Text style={{ color: 'gray', fontSize: 13, fontWeight: '700', flex: 1, textAlign: 'right' }}>0.00</Text>
                    </View>
                </View>

                <View style={styles.borderWhite2}>
                <Text style={{ fontSize: 16, fontWeight: '700', color: 'black' }}>Jumlah Transaksi</Text>
                <Text style={{ color: 'gray', fontSize: 13, fontWeight: '500',}}>(Dari 06-04-2022)</Text>
                    <View style={{ flexDirection: 'row', marginTop: 16 }}>
                        <Text style={{ color: 'gray', fontSize: 13, fontWeight: '700', flex: 1 }}>0</Text>
                        <Image source={require('../Image/arrow-2.png')} style={{height:18, width:18, resizeMode:'contain'}}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default History
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white'
    },
    body: {
        marginLeft: 16,
        marginRight: 16,
        flex: 1,
        marginTop: 24
    },
    borderWhite: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        padding: 12,
        backgroundColor: 'white',
        borderRadius: 12,
    },
    borderWhite2: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        padding: 14,
        backgroundColor: 'white',
        borderRadius: 12,
        marginTop:24
    }
})