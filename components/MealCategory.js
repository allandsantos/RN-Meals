import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native'

import FontFamilies from '../constants/FontFamilies';


const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const MealCategory = props => {
    const { meal, onSelectMeal } = props;
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} style={styles.item} onPress={onSelectMeal}>
                <ImageBackground style={styles.image} source={{ uri: meal.imageUrl }}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText} numberOfLines={1}>{meal.title}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.basicInfosContainer}>
                    <Text style={styles.basicInfoText}>{meal.duration}m</Text>
                    <Text style={styles.basicInfoText}>{meal.complexity}</Text>
                    <Text style={styles.basicInfoText}>{meal.affordability}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default MealCategory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 20,
        alignSelf: 'center',
        width: '95%',
        overflow: 'hidden',
    },
    item: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 5,
        paddingVertical: 3,
    },
    titleContainer: {
        justifyContent: 'flex-end',
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    titleText: {
        fontFamily: FontFamilies.openSansBold,
        color: 'white',
        textAlign: 'center',
        justifyContent: 'flex-end',
        fontSize: 16
    },
    basicInfosContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        backgroundColor: "#ccc"
    },
    basicInfoText: {
        fontFamily: FontFamilies.openSansBold,
        fontSize: 13,
        textTransform: 'uppercase',
        color: 'black',
    },
    image: {
        height: 180,
        width: '100%',
        justifyContent: 'flex-end'
    }
})
