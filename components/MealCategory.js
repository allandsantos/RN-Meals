import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Meal from '../models/meal';

const MealCategory = props => {
    const {meal} = props;
    return (
        <View style={styles.screen}>
            <Text>{meal.title}</Text>
        </View>
    )
}

export default MealCategory

const styles = StyleSheet.create({
    screen:{
        flex: 1
    }
})
