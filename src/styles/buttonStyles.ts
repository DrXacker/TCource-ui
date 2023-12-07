import { StyleSheet } from "react-native";
import {Colors} from "../constants/Colors";


let backgroundColor = Colors.blue
let secondaryColorText = Colors.blue

const buttonStyles = StyleSheet.create({
    primaryButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    /*    backgroundColor: 'rgb(134, 72, 121)',*/
        backgroundColor: backgroundColor,
        borderRadius: 15,
    },
    primaryButtonText: {
        color: 'rgb(233, 233, 233)',
        fontSize: 16,
        fontWeight: '400'
    },
    secondaryButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15
    },
    secondaryButtonText: {
        color: secondaryColorText,
        fontSize: 16,
        fontWeight: '400'
    },
    thirdlyButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15
    },
    thirdlyButtonText: {
        color: 'rgb(233, 233, 233)',
        fontWeight: '400'
    },
});

export default buttonStyles;
