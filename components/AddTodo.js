import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const AddTodo = ({ AddTodo }) => {
  const [task, setTask] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter task..."
        onChangeText={(val) => setTask(val)}
        value={task}
      />
      <View style={styles.btn}>
        <Button
          title="Add"
          onPress={() => {
            AddTodo(task);
            setTask("");
          }}
          color={"coral"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  btn: {
    backgroundColor: "#333",
    padding: 5,
    borderRadius: 10,
    margin: 20,
  },
});

export default AddTodo;
