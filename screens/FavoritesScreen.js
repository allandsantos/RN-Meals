import React from 'react'
import { StyleSheet } from 'react-native'
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';
import DrawerMenu from '../components/DrawerMenu';

const FavoritesScreen = (props) => {
    const catId = 'c2';
    const categoryMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
    
    return (
        <MealList categoryMeals={categoryMeals} navigation={props.navigation}/>
    );
}

FavoritesScreen.navigationOptions = navData => {
    return {
        headerTitle: "Your Favorites Meals",
        headerLeft: <DrawerMenu navData={navData}/>
    };
};

export default FavoritesScreen

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
