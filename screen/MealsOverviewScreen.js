import { View, StyleSheet, Text, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MeailItem from '../components/MealItem'

function MealsOverviewScreen({ route }) {

    const catId = route.params.categoryId;

    const displayMeals = MEALS.filter ((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >=0;
    });

    function renderMealItem(itemData) {

        const item = itemData.item;

        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability
        };

        return  <MeailItem {...mealItemProps}  />
    }

  return (
    <View style={styles.container}>
      {/* <Text>Meail overview Screen - {catId}</Text> */}

    <FlatList 
        data= {displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={ renderMealItem }
        />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
