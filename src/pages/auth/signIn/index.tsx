import React from 'react'
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";
import {AuthContext} from "../../../context/AuthContext";
import {buttonStyles, generalStyles} from "../../../styles";

function SignInScreen() {
    const navigation = useNavigation();

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    // @ts-ignore
    const { authHooks } = React.useContext(AuthContext);

    const signUp = async () => {
        // @ts-ignore
        navigation.navigate('signUp');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ToDo List</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Введите никнейм"
                    style={generalStyles.textInput}
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
                    onPress={() => authHooks.signIn({username, password})}>
                    <Text style={buttonStyles.primaryButtonText}>Войти</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[buttonStyles.secondaryButton, styles.button]}
                    onPress={() => signUp()}>
                    <Text style={buttonStyles.secondaryButtonText}>Регистрация</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignInScreen;
