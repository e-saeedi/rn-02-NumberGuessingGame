import { Text, View, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}
export default PrimaryButton;

// const styles = StyleSheet.create({
//   ButtonContainer: {
//     justifyContent: "center",
//     backgroundColor: "red",
//     textAlign: "center",
//     margin: 15,
//     padding: 8,
//     width: 100,
//     borderColor: "gray",
//     borderWidth: 2,
//     borderRadius: 15,
//   },
// });
