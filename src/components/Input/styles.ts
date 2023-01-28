import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/Colors";

export const styles = StyleSheet.create({
  input: {
    color: COLORS.gray100,
    backgroundColor: COLORS.gray500,
    borderColor: COLORS.gray700,

    fontSize: 16,
    lineHeight: 22,

    borderWidth: 1,
    borderRadius: 6,

    padding: 16,

    flex: 1,
  },
});
