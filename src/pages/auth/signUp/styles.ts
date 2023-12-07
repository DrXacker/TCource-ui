import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: 'center'
    },
    image: {
        height: 75,
        width: 75,
        alignSelf: 'center'
    },
    title: {
        marginTop: 30,
        color: 'rgb(31,31,31)', //todo move to general css
        fontSize: 24,
        alignSelf: 'center'
    },
    inputContainer: {
        marginTop: 30
    },
    textInput: {
        marginTop: 20
    },
    button: {
        marginTop: 20
    }
});

export default styles;
