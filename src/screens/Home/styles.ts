import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/Colors";

export const styles = StyleSheet.create({
  app: {
    flex: 1,

    backgroundColor: COLORS["#1a1a1a"],

    alignItems: "stretch",
    justifyContent: "flex-start",
  },

  headerContainer: {
    backgroundColor: COLORS["gray700"],

    paddingTop: 46 + 24,
    paddingBottom: 72,

    alignItems: "center",
  },

  mainContainer: {
    paddingHorizontal: 24,
  },

  formContainer: {
    marginTop: -32,
    marginBottom: 32,

    flexDirection: "row",
    alignItems: "center",
  },

  progressContainer: {
    marginBottom: 20,

    flexDirection: "row",
    justifyContent: "space-between",
  },
});
