import React from "react";
import { ActivityIndicator, View } from "react-native";

export default function ScreenLayout({ loading, children }) {
  return (
    <View
      style={{
        padding: 5,
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {loading ? <ActivityIndicator color="white" /> : children}
    </View>
  );
}
