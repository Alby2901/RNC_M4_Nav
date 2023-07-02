import { View, StyleSheet, Text, Pressable, Image } from "react-native";

function MeailItem({ title, imageUrl, duration, complexity, affordability }) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View>
          <Text style={styles.title}>{title}</Text>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
        <View>
          <Text style={styles.text}>Duration: {duration}</Text>
          <Text style={styles.text}>
            Complexity: {complexity.toUpperCase()}
          </Text>
          <Text style={styles.text}>
            Affordability: {affordability.toUpperCase()}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MeailItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 4,
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    margin: 1,
  },
});
