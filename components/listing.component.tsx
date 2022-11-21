import { ListingType } from "../types"
import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const ListingItem: React.FC<{
    item: ListingType
}>  = ({ item }) => {
    return <View style={styles.container}>
        <Image source={{uri: item.image}} style={styles.image}/>
        <View style={
            styles.textContainer
        }>
            <Text style={styles.name}>
                {item.name}
            </Text>
            <Text style={[styles.smallText, {
                marginTop: 5
            }]}>
                {item.city}, {item.state}
            </Text>
            <Text style={
                styles.price
            }>
                ${item.price.toFixed(2)}
            </Text>
            <Text style={
                styles.smallText
            }>
                {item.floors} floor, {item.rooms} rooms, {item.sqft}ft
            </Text>
        </View>
    </View>
}



const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.9,
        marginHorizontal: Dimensions.get('window').width * 0.05,
        padding: 15,
        backgroundColor: "#151519",
        borderRadius: 10,
    },
    image: {
        width: Dimensions.get('window').width * 0.9 - 30,
        height:  Dimensions.get('window').width * 0.5,
    },
    textContainer: {
        marginTop: 15,
        paddingHorizontal: 15,
    },
    name: {
        color: "#E1DEE9",
        fontFamily: "Inter-Bold",
        fontSize: 18,
    },
    smallText: {
        color: "#5e5e5e",
        fontFamily: "Inter-Regular",
        fontSize: 14,
    },
    price: {
        fontFamily: "Inter-Bold",
        fontSize: 18,
        marginVertical: 20,
        color: "#FF1493",
    }
});


export default ListingItem;