import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Platform, TouchableNativeFeedback, Dimensions } from 'react-native'
import Colors from '../constants/Colors'
import FontFamilies from '../constants/FontFamilies'


const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const CategoryGridTile = props => {
    const {title, color, onSelect} = props;

    let TouchableComp = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >= 21){
        TouchableComp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem}>
            <TouchableComp
            style={{flex: 1}}
            onPress={onSelect}
        >
            <View style={{...styles.container,...{backgroundColor: color}}}>
                <Text style={styles.title} numberOfLines={2}>{title}</Text>
            </View>
        </TouchableComp>
        </View>
    )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: WIDTH > 350 ? 150 : 110,
        borderRadius: 10,
        overflow: 'hidden'
    },
    container:{
        flex: 1,
        borderRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title:{
        fontFamily: FontFamilies.openSansBold,
        fontSize: WIDTH > 350 ? 20 : 16,
        textAlign: 'right'
    }
})
