import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import CategoriesScreen from "./screen/CategoriesScreen";
import MealsOverviewScreen from './screen/MealsOverviewScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MealCategories">
          <Stack.Screen name='MealCategories' component={CategoriesScreen}/>
          <Stack.Screen name='MealOverview' component={MealsOverviewScreen}/>          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
