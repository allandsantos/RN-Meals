import React from 'react';
import * as StackNavigator from './StackNavigator';
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Colors from '../constants/Colors'
import FontFamilies from '../constants/FontFamilies'
import { Text } from 'react-native';

const configTabNavigation = {
    tabBarOptions: {
        activeTintColor: Colors.red,
        labelStyle: {
            fontFamily: FontFamilies.openSans
        }
    }
};

const TabText = ({title}) => {
    return(
        <Text style={{fontFamily: FontFamilies.openSansBold}}>{title}</Text>
    )
}
const TabScreensNav = {
    Meals: {
        screen: StackNavigator.MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.red,
            tabBarLabel: <TabText title="Meals"/>
        }
    },
    Favorites: {
        screen: StackNavigator.FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.success,
            tabBarLabel: <TabText title="Favorites"/>
        }
    },
}

const MealsFavTabNavigator =
    Platform.OS === 'android' ?
        createMaterialBottomTabNavigator(TabScreensNav, {
            shifting: true
        }) :
        createBottomTabNavigator({ TabScreensNav }, configTabNavigation);



export default MealsFavTabNavigator