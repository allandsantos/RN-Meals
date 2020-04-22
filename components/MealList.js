import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import MealCategory from './MealCategory';
import {useSelector} from 'react-redux';
const MealList = props => {
    const {Meals, navigation} = props;
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
    
    const renderMeals = (meal) => {
        const isFavorite = favoriteMeals.some(fvmeal => fvmeal.id === meal.id);
        return (
            <MealCategory meal={meal} onSelectMeal={()=> {
                navigation.navigate('MealDetail', {mealId: meal.id, mealTitle: meal.title, isFavorite})
            }} />
        );
    }

    return (
        <FlatList
            contentContainerStyle={{marginTop: 10}}
            data={Meals}
            renderItem={({ item }) => renderMeals(item)}
        />
    )
}

export default MealList

const styles = StyleSheet.create({})
