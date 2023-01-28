import { TextInput } from "react-native";

import { COLORS } from "../../constants/Colors";

import { styles } from "./styles";

const Input = (props: {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  onSubmitEditing: () => void;
}) => {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={COLORS["gray300"]}
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
      onSubmitEditing={props.onSubmitEditing}
    />
  );
};

export default Input;
