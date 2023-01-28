import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/Colors";

export const styles = StyleSheet.create({
  button: {
    height: 52,
    width: 52,

    borderRadius: 6,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: COLORS["Blue Dark"],
  },
});
