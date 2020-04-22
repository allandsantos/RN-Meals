import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { ScrollView } from 'react-native-gesture-handler';
import FontFamilies from '../constants/FontFamilies';
import Colors from '../constants/Colors';

const MealDetailScreen = (props) => {

    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <ScrollView style={styles.screen}>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.basicInfosContainer}>
                <Text style={styles.basicInfoText}>{selectedMeal.duration}m</Text>
                <Text style={styles.basicInfoText}>{selectedMeal.complexity}</Text>
                <Text style={styles.basicInfoText}>{selectedMeal.affordability}</Text>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.subTitle}>Ingredients</Text>
                    {selectedMeal.ingredients.map(ing => (
                        <View style={styles.ingredientsContainer}>
                            <Text key={ing} style={styles.ingredientsText}>{ing}</Text>
                        </View>
                    ))}
                </View>
                <View>
                    <Text style={styles.subTitle}>Steps</Text>
                    {selectedMeal.steps.map(stp => (
                        <View style={styles.ingredientsContainer}>
                            <Text key={stp} style={styles.ingredientsText}>{stp}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: selectedMeal.title,
        headerRight: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Favorite" iconName="ios-star-outline" onPress={() => {
                console.log("FAVORITADOOOOO")
            }} />
        </HeaderButtons>)
    };
}

export default MealDetailScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,

    },
    container: {
        paddingHorizontal: 20,
    },
    image: {
        width: '100%',
        height: 200
    },
    basicInfosContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 25,
        justifyContent: 'space-between',
        backgroundColor: "black"
    },
    basicInfoText: {
        fontFamily: FontFamilies.openSansBold,
        fontSize: 13,
        textTransform: 'uppercase',
        color: 'white',
    },
    subTitle:{
        marginTop: 10,
        fontFamily: FontFamilies.openSansBold,
        fontSize: 18,
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    ingredientsContainer:{
        flex: 1,
        borderWidth: 0.5,
        padding: 10,
        marginTop: 10
    },
    ingredientsText: {
        fontFamily: FontFamilies.openSans,
        fontSize: 13,
        textTransform: 'capitalize',
        textAlign: 'justify',
    },
    stepsText: {

    }
})
