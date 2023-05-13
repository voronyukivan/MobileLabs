import * as React from  'react';
import {NavigationContainer} from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from "react-native-ionicons";

import MainScreen from "./screens/MainScreen";
import GalleryScreen from "./screens/GalleryScreen";
import AccountScreen from "./screens/AccountScreen";

const MainName='Main';
const GalleryName='Gallery';
const AccountName='Account';

const Tab=createMaterialTopTabNavigator();
function ButtonsContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={MainName} component={MainScreen}/>
                <Tab.Screen name={GalleryName} component={GalleryScreen}/>
                <Tab.Screen name={AccountName} component={AccountScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default ButtonsContainer;