import { StyleSheet, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
function GameOverScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.test}>
        <Title>You GameOver!!!</Title>
      </View>
      <PrimaryButton>try again</PrimaryButton>
    </View>
  );
}
export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  test: {
    width: "80%",
  },
});
