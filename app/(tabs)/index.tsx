import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export default function HomeScreen() {
  useEffect(() => {
    ScreenOrientation.unlockAsync();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <WebView
        originWhitelist={["*"]}
        source={{
          uri: "https://100-days100-games.vercel.app/minigames/battleship-war/index.html",
        }}
        style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
