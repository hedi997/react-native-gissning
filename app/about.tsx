import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function About() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/" push>
        Index
      </Link>
    </View>
  );
}
