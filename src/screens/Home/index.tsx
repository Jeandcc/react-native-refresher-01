import { FlatList, Image, View } from "react-native";
import { useState } from "react";

import Input from "../../components/Input";
import Button from "../../components/Button";
import TextWithCounter from "../../components/TextWithCounter";
import Task from "../../components/Task";

import { COLORS } from "../../constants/Colors";

import { ITask } from "../../types/Task";

import { styles } from "./styles";

export default function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const createTask = () => {
    setTasks((currentVal) => {
      return [
        ...currentVal,
        {
          id: new Date().getTime().toString(),
          title: newTaskTitle,
          done: false,
        },
      ];
    });

    setNewTaskTitle("");
  };

  const deleteTask = (id: string) => {
    setTasks((currentVal) => {
      return currentVal.filter((t) => t.id !== id);
    });
  };

  const toggleTask = (id: string) => {
    setTasks((currentVal) => {
      return currentVal.map((t) => {
        if (t.id === id) {
          return { ...t, done: !t.done };
        }

        return t;
      });
    });
  };

  return (
    <View style={styles.app}>
      <View style={styles.headerContainer}>
        <Image source={require("../../../assets/logo.png")} />
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.formContainer}>
          <Input
            value={newTaskTitle}
            onChangeText={setNewTaskTitle}
            onSubmitEditing={createTask}
            placeholder="Add a new task"
          ></Input>
          <View style={{ width: 4 }}></View>
          <Button
            onPress={createTask}
            icon={require("../../../assets/plus.png")}
          ></Button>
        </View>

        <View style={styles.progressContainer}>
          <TextWithCounter
            label="Created"
            labelColor={COLORS.Blue}
            count={tasks.length}
          ></TextWithCounter>
          <TextWithCounter
            label="Concluded"
            labelColor={COLORS.Purple}
            count={tasks.filter((t) => t.done).length}
          ></TextWithCounter>
        </View>

        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Task
              task={item}
              onDelete={() => deleteTask(item.id)}
              onToggle={() => toggleTask(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}
