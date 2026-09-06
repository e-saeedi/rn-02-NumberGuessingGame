import { StyleSheet, Text } from "react-native";

import Colors from "../constants/colore";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    padding: 12,
    fontWeight: "bold",
    color: Colors.accent500,
    borderWidth: 2,
    borderColor: Colors.accent500,
    borderRadius: 5,
    textAlign: "center",
  },
});
