import { View, Text } from "react-native";

import { styles } from "./styles";

const TextWithCounter = (props: {
  label: string;
  labelColor: string;
  count: number;
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.labelText, { color: props.labelColor }]}>
        {props.label}
      </Text>
      <View style={styles.counterWrapper}>
        <Text style={styles.counterText}>{props.count}</Text>
      </View>
    </View>
  );
};

export default TextWithCounter;
