import { createDrawerNavigator } from 'react-navigation-drawer';
import MealsFavTabNavigator from './TabNavigator';
import { FilterNavigator } from './StackNavigator';
import Colors from '../constants/Colors';
import FontFamilies from '../constants/FontFamilies';

export const MainNavigator = createDrawerNavigator({
    MealsFav: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FilterNavigator
},
{
    contentOptions: {
        activeTintColor: Colors.mainApp,
        labelStyle:{
            fontFamily: FontFamilies.openSans
        }
    }
});