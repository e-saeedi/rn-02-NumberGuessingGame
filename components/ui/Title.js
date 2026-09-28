import { StyleSheet, Text, Platform } from "react-native";

import Colors from "../../constants/colore";

function Title({ children, style }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    padding: 12,
    fontWeight: "bold",
    color: "white",
    // borderWidth: 2,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: "white",
    borderRadius: 3,
    textAlign: "center",
    maxWidth: "80%",
    width: 300,
  },
});
