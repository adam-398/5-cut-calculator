import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const [nearSideWidth, setNearSideWidth] = useState("");
  const [farSideWidth, setFarSideWidth] = useState("");
  const [stripLength, setStripLength] = useState("");
  const [fenceLength, setFenceLength] = useState("");

  function calculateCut() {
    const nearWidth = parseFloat(nearSideWidth);
    const farWidth = parseFloat(farSideWidth);
    const length = parseFloat(stripLength);
    const fenceLengthNum = parseFloat(fenceLength);

    if (
      isNaN(nearWidth) ||
      isNaN(farWidth) ||
      isNaN(length) ||
      isNaN(fenceLengthNum)
    ) {
      return "Please enter valid numbers for all fields.";
    }

    const result = ((farWidth - nearWidth) / 4) * (fenceLengthNum / length);

    if (result > 0) {
      return `The fence should be moved ${result.toFixed(2)}mm forwards.`;
    } else if (result < 0) {
      return `The fence should be moved ${result.toFixed(2)}mm backwards.`;
    } else {
      return "No cut is needed as the widths are the same.";
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>5 cut calculator</Text>

      <Text style={styles.inputTitle}>Enter the dimensions in mm:</Text>

      <Text style={styles.inputTitle}>
        Enter the dimensions of the nearside width:
      </Text>
      <TextInput
        style={styles.input}
        keyboardType="decimal-pad"
        value={nearSideWidth}
        onChangeText={setNearSideWidth}
      ></TextInput>

      <Text style={styles.inputTitle}>
        Enter the dimensions of the farside width:
      </Text>
      <TextInput
        style={styles.input}
        keyboardType="decimal-pad"
        value={farSideWidth}
        onChangeText={setFarSideWidth}
      ></TextInput>

      <Text style={styles.inputTitle}>Enter the strip length:</Text>
      <TextInput
        style={styles.input}
        keyboardType="decimal-pad"
        value={stripLength}
        onChangeText={setStripLength}
      ></TextInput>

      <Text style={styles.inputTitle}>Enter length fence:</Text>
      <TextInput
        style={styles.input}
        keyboardType="decimal-pad"
        value={fenceLength}
        onChangeText={setFenceLength}
      ></TextInput>

      <Text style={styles.inputTitle}>{calculateCut()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputTitle: {
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: 100,
    alignSelf: "center",
  },
});
