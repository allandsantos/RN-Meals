import React from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import Colors from '../constants/Colors'

import { CATEGORIES, MEALS } from '../data/dummy-data';

import MealCategory from '../components/MealCategory';

const CategoryMealsScreen = (props) => {

    const catId = props.navigation.getParam('categoryId');
    const categoryMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    const renderMeals = (meal) =>{
        <MealCategory meal={meal}/>
    }

    return (
        <FlatList 
        data={categoryMeals}
        renderItem={(itemData) => renderMeals({itemData})}
        />
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {

    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title
    };
}




export default CategoryMealsScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    }
})
