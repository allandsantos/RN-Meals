import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import MealList from '../components/MealList';
import DrawerMenu from '../components/DrawerMenu';
import {useSelector} from 'react-redux';

const FavoritesScreen = (props) => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
    if(favoriteMeals.length === 0 || !favoriteMeals){
        return (
            <View style={styles.content}>
                <Text>No favorite meals found, Start adding some!</Text>
            </View>
        );
    }

    return (
        <MealList Meals={favoriteMeals} navigation={props.navigation}/>
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
    content:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
