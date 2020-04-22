import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import MealCategory from './MealCategory';

const MealList = props => {
    const {categoryMeals, navigation} = props;

    const renderMeals = (meal) => {
        return (
            <MealCategory meal={meal} onSelectMeal={()=> {
                navigation.navigate('MealDetail', {mealId: meal.id})
            }} />
        );
    }

    return (
        <FlatList
            contentContainerStyle={{marginTop: 10}}
            data={categoryMeals}
            renderItem={({ item }) => renderMeals(item)}
        />
    )
}

export default MealList

const styles = StyleSheet.create({})
