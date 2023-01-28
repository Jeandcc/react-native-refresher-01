import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 8,

    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 8,

    backgroundColor: COLORS.gray500,

    borderColor: COLORS.gray400,
    borderWidth: 1,

    borderRadius: 8,
  },

  checkbox: {
    marginRight: 8,
  },

  label: {
    marginRight: 8,
    color: COLORS.gray100,
  },

  trash: {
    marginLeft: "auto",
  },
});
