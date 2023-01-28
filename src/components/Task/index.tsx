import { View, Text, Image, TouchableOpacity } from "react-native";

import { COLORS } from "../../constants/Colors";

import { ITask } from "../../types/Task";

import { styles } from "./styles";

const Task = (props: {
  task: ITask;
  onToggle?: () => void;
  onDelete?: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onToggle}>
      <View style={styles.checkbox}>
        {props.task.done ? (
          <Image source={require("../../../assets/check--filled.png")} />
        ) : (
          <Image source={require("../../../assets/check--unfilled.png")} />
        )}
      </View>

      <Text
        style={[
          styles.label,
          props.task.done
            ? { color: COLORS.gray300, textDecorationLine: "line-through" }
            : {},
        ]}
      >
        {props.task.title}
      </Text>

      <TouchableOpacity style={styles.trash} onPress={props.onDelete}>
        <Image source={require("../../../assets/trash.png")}></Image>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Task;
