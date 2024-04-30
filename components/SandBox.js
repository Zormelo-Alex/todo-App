import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SandBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    backgroundColor: "#ddd",
    marginTop: 50,
  },
  boxOne: {
    backgroundColor: "red",
    padding: 10
  },
  boxTwo: {
    backgroundColor: "green",
    padding: 10
  },
  boxThree: {
    backgroundColor: "yellow",
    padding: 10
  },
  boxFour: {
    backgroundColor: "violet",
    padding: 10
  },
});

export default SandBox;
