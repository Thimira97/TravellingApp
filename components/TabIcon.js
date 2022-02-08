import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';

const TabIcon = ({focused, icon, name}) => {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                height: 80,
                width: 200,
                marginLeft: focused ? 25 : 0 ,
                marginRight: focused ? 25 : 0 ,
            }}
        >
            <Image
                source={icon}
                resizeMode="contain"
                style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? COLORS.darkGreen : COLORS.lightLime,
                }}
            />
            {focused &&
                <Text style={styles.text}>{name}</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: COLORS.darkGreen,
        paddingLeft: SIZES.padding/3,
        ...FONTS.h2,
    },
})

export default TabIcon;
