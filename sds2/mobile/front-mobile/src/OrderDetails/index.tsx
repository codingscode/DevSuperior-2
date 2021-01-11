import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import Header from '../Header'
import { Order } from '../types'

type Props = {
    route: {
       params: {
          order: Order
       }
    }
}

export default function OrderDetails({ route }: Props) {
    const order = route.params.order // ou const { order } = route.params
    const navigation = useNavigation()
          
    const handleOnPress = () => {
        navigation.navigate('Orders')
    }

    return (
        <>
           <Header />
           <View>
              <Text>Detalhes do pedido {order.id}</Text>
           </View>
        </>
    )
}

const styles = StyleSheet.create({
    
})
