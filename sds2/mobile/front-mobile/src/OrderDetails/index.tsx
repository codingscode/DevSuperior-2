import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import { useNavigation } from '@react-navigation/native'



export default function OrderDetails() {
    const navigation = useNavigation()
          
    const handleOnPress = () => {
        navigation.navigate('Orders')
    }

    return (
       <View>
           <Text>Detalhes do pedido</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    
})
