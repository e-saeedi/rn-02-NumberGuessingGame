import { Text, View, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.BottonInnerContainer}
        android_ripple={{ color: "#650535" }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    overflow: "hidden",
    borderRadius: 28,
    marginHorizontal: 4,
  },
  BottonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

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
