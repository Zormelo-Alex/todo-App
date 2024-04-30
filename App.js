import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import SandBox from "./components/SandBox";

export default function App() {
  const [userData, setUserData] = useState([]);

  const handleAdd = (task) => {
    if (task.trim() == "")
      return Alert.alert("OOPS!", "You cant add an empty todo", [
        { text: "Ok", onPress: () => console.log("canceled") },
      ]);
    // console.log(task);
    setUserData([...userData, { text: task, id: userData.length + 1 }]);
  };

  const handlePress = (id) => {
    // console.log(id);
    setUserData(userData.filter((data) => data.id !== id));
  };

  return (
    // <SandBox />
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <View style={styles.list}>
            <AddTodo AddTodo={handleAdd} />
            {userData.length ? (
              <View style={styles.list}>
                <FlatList
                  data={userData}
                  renderItem={({ item }) => (
                    <View>
                      <TodoItem data={item} onPressFunc={handlePress} />
                    </View>
                  )}
                />
              </View>
            ) : (
              <View style={styles.noData}>
                <Text>Add A Task...</Text>
              </View>
            )}
          </View>
        </View>

        {/* <StatusBar style="auto" /> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "start",
    // justifyContent: "top",
  },
  content: {
    margin: 10,
    flex: 1,
  },
  list: {
    flex: 1,
    paddingBottom: 20
  },
  noData: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 250,
  },
});
