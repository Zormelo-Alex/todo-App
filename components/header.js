import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>My Todos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        height: 90,
        paddingTop: 48,
        backgroundColor: "coral"
    },
    title: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    }
})


export default Header