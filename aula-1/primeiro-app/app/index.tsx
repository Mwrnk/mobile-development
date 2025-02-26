import React from "react";
import { Text, TextInput, View } from "react-native";

export default function Index() {
  const [text, setText] = React.useState("");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
      placeholder="Type here">
      onchange

      </TextInput>
    </View>
  );
}
