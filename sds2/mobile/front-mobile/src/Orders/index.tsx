import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { fetchOrders } from '../api'
import Header from '../Header'
import OrderCard from '../OrderCard'



export default function Orders() {

    useEffect(() => {
        fetchOrders()
           .then(response => console.log(response))
           .catch(error => console.log(error))
    }, [])
  
    return (
        <>
            <Header />
            <ScrollView style={styles.container} >
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%'
    }
})
