import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'

const Spinner = (showText = true) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <ActivityIndicator
                size='large'
                color='orange'
            />
            {
                showText && (
                    <Text style={{
                        top: 5,
                        fontWeight: 'bold'
                    }}>Ачааллаж байна</Text>
                )
            }
        </View>
    )
}

export default Spinner

const styles = StyleSheet.create({})