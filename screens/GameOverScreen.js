import { StyleSheet, View, Image, Text } from "react-native";

import Title from "../components/ui/Title";
import Colors from "../constants/colore";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ userNumber, roundsNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.avif")}
        />
      </View>

      <Text style={styles.summaryText}>
        your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}> Start New Game </PrimaryButton>
    </View>
  );
}
export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: Colors.primary800,
    borderWidth: 3,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontWeight: "bold",
    color: Colors.primary500,
  },
});
