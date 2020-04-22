import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DrawerMenu from '../components/DrawerMenu'
import { Switch } from 'react-native-gesture-handler'
import FontFamilies from '../constants/FontFamilies';
import Colors from '../constants/Colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import { useDispatch } from 'react-redux';
import { setFilters } from '../store/actions/meals';

const FilterSwitch = ({ title, isGlutenFree, onChange }) => {
    return (
        <View style={styles.filterContainer}>
            <Text>{title}</Text>
            <Switch
                trackColor={{ true: Colors.mainApp }}
                thumbColor={Colors.mainApp}
                value={isGlutenFree}
                onValueChange={onChange}
            />
        </View>
    );
}
const FiltersScreen = (props) => {

    const {navigation} = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)

    const dispatch = useDispatch();
    
    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        };
        dispatch(setFilters(appliedFilters));
    },[isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

    useEffect(() =>{
        navigation.setParams({save: saveFilters});
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch
                title="Gluten-free"
                isGlutenFree={isGlutenFree}
                onChange={newValue => setIsGlutenFree(newValue)}
            />
            <FilterSwitch
                title="Lactose"
                isGlutenFree={isLactoseFree}
                onChange={newValue => setIsLactoseFree(newValue)}
            />
            <FilterSwitch
                title="Vegan"
                isGlutenFree={isVegan}
                onChange={newValue => setIsVegan(newValue)}
            />
            <FilterSwitch
                title="Vegetarian"
                isGlutenFree={isVegetarian}
                onChange={newValue => setIsVegetarian(newValue)}
            />
        </View>
    )
}

FiltersScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "Filtered Meals",
        headerLeft: <DrawerMenu navData={navData} />,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Save" iconName="ios-save" size={22} onPress={() => navData.navigation.getParam('save')()} />
            </HeaderButtons>
        ),
    }
}

export default FiltersScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: FontFamilies.openSansBold,
        fontSize: 22,
        margin: 20,
        textAlign: 'center',
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    }
})
