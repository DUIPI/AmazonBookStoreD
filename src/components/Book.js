import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const thousandify = require("thousandify")

const Book = ({ data }) => {
    return (
        <View style={{ marginLeft: 15, marginVertical: 15, width: 195 }}>
            <Image
                style={{ width: 200, height: 300, marginRight: 15 }}
                source={{
                    uri: 'https://internom.mn/_next/image?url=https%3A%2F%2Fsinpim130259-dev.s3.ap-southeast-1.amazonaws.com%2Fpublic%2Fproduct-thumb%2F98zxj5LsJSnGD27yBcRl-thumb.jpg&w=3840&q=75'
                }} />

            <Text style={{ marginLeft: 10, fontSize: 13, marginTop: 10 }} >{data.name}</Text>

            <Text style={{ marginLeft: 10, fontWeight: 'bold', marginVertical: 5 }} >
                {data.author}
            </Text>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 5,
                marginTop: 5,
                alignItems: 'center'
            }}>
                <Text style={{ marginRight: 10, fontWeight: 'bold', fontSize: 18 }} >
                    {thousandify(data.price)}₮
                </Text>
                <Text style={{ marginRight: 10, fontSize: 12, color: 'blue' }} >
                    {data.balance > 0 ? `Тоо: ${data.balance}` : null}
                </Text>
            </View>
        </View>
    )
}

export default Book

const styles = StyleSheet.create({})