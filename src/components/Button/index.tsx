import { Image, ImageSourcePropType, TouchableOpacity } from "react-native";

import { styles } from "./styles";

const Button = (props: { icon: ImageSourcePropType; onPress: () => void }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Image source={props.icon}></Image>
    </TouchableOpacity>
  );
};

export default Button;
