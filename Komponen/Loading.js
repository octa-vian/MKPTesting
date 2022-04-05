import { View, Text, Image } from 'react-native'
import React from 'react'

const Loading = () => {
    return (
        <View style={{ flex: 1, position: 'absolute', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            <View style={{
                height: 80, width: 80, borderRadius: 12, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 3,
            }}>
                <Image source={require('../Screen/Image/Loading-1.gif')} style={{ height: 70, width: 70, resizeMode: 'contain', borderRadius: 12, backgroundColor: 'white' }} />
            </View>
        </View>
    )
}

export default Loading