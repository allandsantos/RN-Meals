import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import { createAppContainer } from 'react-navigation'
import Colors from '../constants/Colors'


const configNavigation = {
    initialRouteName: 'Categories',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.mainApp,
        },
        headerTintColor: Colors.white
    }
}
const MealsNavigator = createStackNavigator(
{
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
},
configNavigation);

export default createAppContainer(MealsNavigator)

const styles = StyleSheet.create({})
