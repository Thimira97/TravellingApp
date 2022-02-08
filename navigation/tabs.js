import React from "react";
import {
    View,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {TabIcon} from '../components';

import { Home } from "../screens";
import { COLORS, icons } from "../constants";

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style:{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: COLORS.white,
                    borderTopColor: "transparent",
                    height: 70,
                    paddingLeft: 10,
                    paddingRight: 15,
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: false,
                    tabBarIcon: ({focused}) => <TabIcon name="Home" focused={focused} icon={icons.home} />
                }}
            />
            <Tab.Screen
                name="Map"
                component={Home}
                options={{
                    tabBarLabel: false,
                    tabBarIcon: ({focused}) => <TabIcon name="Map" focused={focused} icon={icons.compass} />
                }}
            />
            <Tab.Screen
                name="Menu"
                component={Home}
                options={{
                    tabBarLabel: false,
                    tabBarIcon: ({focused}) => <TabIcon name="Menu" focused={focused} icon={icons.list} />
                }}
            />
            <Tab.Screen
                name="User"
                component={Home}
                options={{
                    tabBarLabel: false,
                    tabBarIcon: ({focused}) => <TabIcon name="Profile" focused={focused} icon={icons.user} />
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;