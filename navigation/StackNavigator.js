import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import Colors from '../constants/Colors'
import { createStackNavigator } from 'react-navigation-stack'
import FiltersScreen from "../screens/FiltersScreen";
import FontFamilies from '../constants/FontFamilies'

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Colors.mainApp,
    },
    headerTitleStyle:{
        fontFamily: FontFamilies.openSansBold,
    },
    headerTitleContainerStyle: {
      width: '70%',
      alignItems: 'center',
    },
    headerTitleAlign: 'center',
    headerBackTitleStyle:{
        FontFamilies: FontFamilies.openSansBold
    },
    headerTintColor: Colors.white
};

export const MealsNavigator = createStackNavigator(
    {
        Categories: CategoriesScreen,
        CategoryMeals: CategoryMealsScreen,
        MealDetail: MealDetailScreen
    },
    {
        initialRouteName: 'Categories',
        defaultNavigationOptions: defaultStackNavOptions
    }
);

export const FavNavigator = createStackNavigator(
    {
        Favorites: FavoritesScreen,
        MealDetail: MealDetailScreen
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
);

export const FilterNavigator = createStackNavigator({
    Filters: FiltersScreen
},
{
    defaultNavigationOptions: defaultStackNavOptions
});

