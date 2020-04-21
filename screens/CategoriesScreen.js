import React from 'react'
import { StyleSheet, Dimensions, FlatList } from 'react-native'

import Colors from '../constants/Colors';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const CategoriesScreen = (props) => {

    const renderGridItem = (category) => {
        console.log(category);
        return (
            <CategoryGridTile 
            title={category.title}
            color={category.color}
            onSelect={
                () => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: category.id
                        }
                    });
                }
            } />
        );
    };

    return (
        <FlatList
            data={CATEGORIES}
            renderItem={({ item }) => renderGridItem(item)}
            numColumns={2}
        />
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
};

export default CategoriesScreen


const styles = StyleSheet.create({});