import React from 'react'
import {Text, TextInput, TouchableOpacity, View} from "react-native";

import {AuthContext} from "../../../context/AuthContext";
import styles from "./styles";
import {buttonStyles, generalStyles} from "../../../styles";
import {useNavigation} from "@react-navigation/native";


function SignUpScreen({ route }) {
    const navigation = useNavigation();

    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    // @ts-ignore
    const { authHooks } = React.useContext(AuthContext);


    const signUp = async () => {

        await authHooks.signUp({firstName, lastName, username, password});

        // @ts-ignore
        navigation.navigate('signIn');
    }

    const signIn = async () => {
        // @ts-ignore
        navigation.navigate('signIn');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ToDo List</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Введите имя"
                    style={generalStyles.textInput}
                    value={firstName}
                    onChangeText={setFirstName}/>
                <TextInput
                    placeholder="Введите фамилию"
                    style={[generalStyles.textInput, styles.textInput]}
                    value={lastName}
                    onChangeText={setLastName}/>
                <TextInput
                    placeholder="Введите никнейм"
                    style={[generalStyles.textInput, styles.textInput]}
                    value={username}
                    onChangeText={setUsername}/>
                <TextInput
                    placeholder="Введите пароль"
                    style={[generalStyles.textInput, styles.textInput]}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry/>
                <TouchableOpacity
                    style={[buttonStyles.primaryButton, styles.button]}
                    onPress={() => signUp()}>
                    <Text style={buttonStyles.primaryButtonText}>Регистрация</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[buttonStyles.secondaryButton, styles.button]}
                    onPress={() => signIn()}>
                    <Text style={buttonStyles.secondaryButtonText}>Войти</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUpScreen;
