import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  labelText: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: "700",

    marginRight: 8,
  },

  counterWrapper: {
    paddingVertical: 2,
    paddingHorizontal: 8,

    borderRadius: 999,

    backgroundColor: COLORS["gray400"],
  },

  counterText: {
    color: COLORS.gray100,
    fontSize: 12,
    lineHeight: 15,
    fontWeight: "700",
  },
});
