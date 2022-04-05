import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const TiketKit = () => {
    const [extraData, setExtraData] = useState(false);
    const [data, setData] = useState([
        {
            id: 1,
            kode: 'TK',
            namaTk: 'Tiket Masuk Kit',
            nominal: '1.00',
            jumlah: 0
        },
        {
            id: 2,
            kode: 'T2',
            namaTk: 'Tiket Masuk Kit 2',
            nominal: '1.00',
            jumlah: 0
        }
    ])

    const ChangeCount = (item, index, jumlah) => {
        if (data[index].id == item.id) {
            data[index].jumlah = data[index].jumlah + jumlah
        }
        setExtraData(!extraData);
    }

    const RenderItem = (item, index) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                <View style={{ height: 80, width: 80, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EBEBEB', borderRadius: 12 }}>
                    <Text style={{ fontSize: 26, fontWeight: '700', color: 'black' }}>{item.kode}</Text>
                </View>
                <View style={{ justifyContent: 'center', flex: 1, marginLeft: 16 }}>
                    <Text style={{ fontSize: 14, fontWeight: '700', color: '#1d2f7b', textTransform: 'uppercase' }}>{item.namaTk}</Text>
                    <Text style={{ fontSize: 13, fontWeight: '500', color: 'gray', marginTop: 6 }}>{'Tiket Kit'}</Text>
                    <Text style={{ fontSize: 13, fontWeight: '500', color: 'gray', marginTop: 6 }}>{item.nominal}</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <TouchableOpacity style={{ flex: 0.6 }} onPress={() => ChangeCount(item, index, 1)}>
                        <Image source={require('../Image/drop-down-arrow.png')} style={{ height: 20, width: 20, }} />
                    </TouchableOpacity>
                    <View style={{ paddingLeft: 16, height: 24, paddingRight: 16, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EBEBEB', borderRadius: 12, }}>
                        <Text style={{ fontSize: 14, fontWeight: '700', color: 'black', }}>{item.jumlah}</Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.page}>
            <FlatList
                data={data}
                extraData={extraData}
                renderItem={({ item, index }) => RenderItem(item, index)}
            />
        </View>
    )
}

export default TiketKit
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 16
    }
})