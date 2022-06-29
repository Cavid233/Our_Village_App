import React from "react";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack"; // NEW
import StartScreen from "../screens/StartScreen";
import HomeScreen, {
  screenOptions as homeScreenOptions,
} from "../screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";

import AddressesScreen from "../screens/cart/AddressesScreen";
import CategoriesScreen from "../screens/category/CategoriesScreen";
import SubCategoryScreen from "../screens/category/SubCategoryScreen";
import CartScreen from "../screens/cart/CartScreen";
import MapScreen from "../screens/cart/MapScreen";
import AddAdressScreen from "../screens/cart/AddAdressScreen";

import RegisterScreen from "../screens/auth/RegisterScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import SmsScreen from "../screens/auth/SmsScreen";

import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import StoryScreen from "../screens/StoryScreen";
import CampaignScreen from "../screens/CampaignScreen";
import * as modalAction from "../store/actions/modal-actions"; // Nwe
import { useDispatch } from "react-redux";

import ProfileMainScreen from "../screens/profile/ProfileMainScreen";

import ProfileOredersScreens from "../screens/profile/ProfileOredersScreens";

import ResetPasswordScreen from "../screens/profile/ResetPasswordScreen";

import UserProfileScreen from "../screens/profile/UserProfileScreen";

const HomeStackNavigator = createStackNavigator();

const HomeNavigator = (props) => {
  return (
    <HomeStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStackNavigator.Screen
        name="HomeScreen"
        options={homeScreenOptions}
        component={HomeScreen}
      />
      <HomeStackNavigator.Screen name="StoryScreen" component={StoryScreen} />
      <HomeStackNavigator.Screen
        name="SubCategoryScreen"
        component={SubCategoryScreen}
      />
      <HomeStackNavigator.Screen
        name="CampaignScreen"
        component={CampaignScreen}
      />
    </HomeStackNavigator.Navigator>
  );
};

const CategoriesStackNavigator = createStackNavigator();

const CategoriesNavigator = (props) => {
  return (
    <CategoriesStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <CategoriesStackNavigator.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
      />
      <CategoriesStackNavigator.Screen
        name="SubCategoryScreen"
        component={SubCategoryScreen}
      />
    </CategoriesStackNavigator.Navigator>
  );
};
const SettingsStackNavigator = createStackNavigator();

const SettingsNavigator = (props) => {
  return (
    <SettingsStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <SettingsStackNavigator.Screen
        name="ProfileMainScreen"
        component={ProfileMainScreen}
      />
      <SettingsStackNavigator.Screen
        name="ProfileOredersScreens"
        component={ProfileOredersScreens}
      />
      <SettingsStackNavigator.Screen
        name="UserProfileScreen"
        component={UserProfileScreen}
      />
      <SettingsStackNavigator.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />
    </SettingsStackNavigator.Navigator>
  );
};

const CartStackNavigator = createStackNavigator();

const CartNavigator = (props) => {
  return (
    <CartStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <CartStackNavigator.Screen name="CartScreen" component={CartScreen} />
      <CartStackNavigator.Screen
        name="AddressesScreen"
        component={AddressesScreen}
      />

      <CartStackNavigator.Screen name="MapScreen" component={MapScreen} />
      <CartStackNavigator.Screen
        name="AddAdressScreen"
        component={AddAdressScreen}
      />

      <CartStackNavigator.Screen
        name="RegisterScreen"
        component={RegisterScreen}
      />
      <CartStackNavigator.Screen name="LoginScreen" component={LoginScreen} />
      <CartStackNavigator.Screen name="SmsScreen" component={SmsScreen} />
    </CartStackNavigator.Navigator>
  );
};

const VillageBottomTabNavigation = createBottomTabNavigator();

const VillageNavigator = () => {
  return (
    <VillageBottomTabNavigation.Navigator
      tabBarOptions={{
        initialRouteName: "Home",
        activeTintColor: "black",
      }}
    >
      <VillageBottomTabNavigation.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          title: "Ana səhifə",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <VillageBottomTabNavigation.Screen
        name="Categories"
        component={CategoriesNavigator}
        options={{
          title: "Kateqoriyalar",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="view-grid-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <VillageBottomTabNavigation.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          title: "Səbət",

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cart-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <VillageBottomTabNavigation.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          title: "Parametrlər",
          tabBarButton: (props) => {
            const dispatch = useDispatch();
            return (
              <TouchableOpacity
                {...props}
                onPress={() => dispatch(modalAction.modalShowHandler(true))}
              />
            );
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={"settings-outline"} size={size} color={color} />
          ),
        }}
      />
    </VillageBottomTabNavigation.Navigator>
  );
};

const MainStackNavigator = createStackNavigator();

const MainNavigator = (props) => {
  return (
    <MainStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStackNavigator.Screen name="StartScreen" component={StartScreen} />
      <MainStackNavigator.Screen
        name="VillageNavigator"
        component={VillageNavigator}
      />
    </MainStackNavigator.Navigator>
  );
};

export default MainNavigator;
