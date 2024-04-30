import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TodoItem = ({ data, onPressFunc }) => {
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.item}>
          <Text style={styles.text}>{data.text}</Text>
          <MaterialIcons name="delete" onPress={() => onPressFunc(data.id)} style={styles.icon}/>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "dashed",
    marginTop: 16,
    padding: 16,
    borderRadius: 10,
    borderColor: "#bbb",
  },
  text: {
    fontSize: 18
  },
  icon: {
    fontSize: 25,
    color: "coral"
  }
});

export default TodoItem;
