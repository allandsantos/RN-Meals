import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from './HeaderButton'

const DrawerMenu = ({navData}) => {
    return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Menu" iconName="ios-menu" size={22} onPress={() => {
                navData.navigation.toggleDrawer()
            }} />
        </HeaderButtons>
    )
}

export default DrawerMenu
