import React, {useEffect, useState} from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import {Task} from "../Task";
import {createTask, loadTasks, updateTask} from "../../services/api";
export const TaskList = () => {
    const [body, setBody] = useState("");
    const [taskItems, setTaskItems] = useState([]);
    const [defaultTheme, setDefaultTheme] = useState(true);
    const handleAddTask = async () => {
        Keyboard.dismiss();
        let task = {
            body: body,
        }
        let tasks = await createTask(task);
        setTaskItems(tasks);
    }

    React.useEffect(() => {
        const bootstrapAsync = async () => {
           let tasks = await loadTasks();
           // @ts-ignore
           //  console.log(tasks);
            setTaskItems(tasks);
        };
        bootstrapAsync().then();
    }, []);

    const completeTask = async index => {
        let tasks = await updateTask(index, {isCompleted: true});
        setTaskItems(tasks);
    }

    return (
        <View style={defaultTheme ? styles.container : styles.container_dark}>
            <View style={styles.tasksWrapper}>
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1
                    }}
                    keyboardShouldPersistTaps='handled'
                >
                    <Text style={defaultTheme ? styles.sectionTitle : styles.sectionTitle_dark}>Tasks</Text>
                    <View style={styles.items}>
                        {
                            taskItems.map((item, index) => {
                                return (
                                    <TouchableOpacity key={item.id} onPress={() => completeTask(item.id)}>
                                        <Task text={item.body}
                                              theme={defaultTheme}
                                              completed={item.isCompleted}
                                        ></Task>
                                    </TouchableOpacity>
                                );
                            })
                        }
                    </View>
                </ScrollView>
            </View>

            {/* Create a new task section */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.createTaskWrapper}
            >
                <TextInput style={defaultTheme ? styles.input : styles.input_dark} placeholder={'Create a new task...'}
                           placeholderTextColor={defaultTheme ? "black" : "white"} value={body}
                           onChangeText={text => setBody(text)}></TextInput>

                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={defaultTheme ? styles.addWrapper : styles.addWrapper_dark}>
                        <Text style={styles.addText_dark}>+</Text>
                    </View>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
    container_dark: {
        flex: 1,
        backgroundColor: '#333',
        color: 'white',
    },
    themeWrapper: {
        marginTop: 25,
        marginLeft: 25,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "white",
        width: 120
    },
    themeWrapper_dark: {
        marginTop: 25,
        marginLeft: 25,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#444",
        width: 120
    },
    themeText_dark: {
        color: "white"
    },
    tasksWrapper: {
        paddingTop: 20,
        paddingHorizontal: 20,
        flexGrow: 0,
    },
    sectionTitle: {
        margin: 10,
        fontWeight: "bold",
        fontSize: 24
    },
    sectionTitle_dark: {
        margin: 10,
        fontWeight: "bold",
        fontSize: 24,
        color: "white"
    },
    items: {
        display: "flex",
        flexDirection: "column",
    },
    createTaskWrapper: {
        alignSelf: "flex-end",
        bottom: 0,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: 25,
        marginTop: 25
    },
    input: {
        padding: 15,
        backgroundColor: "white",
        borderRadius: 60,
        borderWidth: 2,
        borderColor: "#ddd",
        width: 250
    },
    input_dark: {
        padding: 15,
        backgroundColor: "#555",
        borderRadius: 60,
        borderWidth: 2,
        borderColor: "#444",
        width: 250,
        color: "white"
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: "white",
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center"
    },
    addWrapper_dark: {
        width: 60,
        height: 60,
        backgroundColor: "#444",
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center"
    },
    addText_dark: {
        color: "black"
    },
});