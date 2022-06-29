import React from "react";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/VillageNavigation";
import { StatusBar } from "expo-status-bar";
import FlashMessage from "react-native-flash-message";
import AppLoading from "expo-app-loading";

import modalReducer from "./store/reducers/modal-reducer";

import cartReducer from "./store/reducers/cart";

import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";

const rootReducer = combineReducers({
  modal: modalReducer,
  cart: cartReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar style="dark" />
          <AppNavigator />
          <FlashMessage floating position="bottom" />
        </NavigationContainer>
      </Provider>
    );
  }
}
