import React from 'react'
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';

const CategoryMealsScreen = (props) => {

    const availableMeals = useSelector(state => state.meals.filteredMeals);
    
    const catId = props.navigation.getParam('categoryId');
    const categoryMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
    
    if(!categoryMeals || categoryMeals.length === 0)
    {
        return (
            <View style={styles.container}>
                <Text>No meals found, maybe check your filters</Text>
            </View>
        );
    }

    return (
        <MealList Meals={categoryMeals} navigation={props.navigation}/>
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {

    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title
    };
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen