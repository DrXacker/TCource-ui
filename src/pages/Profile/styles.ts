import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#F0EDF5'
    },
    avatarIcon: {
        width: 100
    },
    balanceContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 20,
    },
    balanceValueSeparator: {
        marginLeft: 20,
    },
    usernameText: {
        color: 'rgb(233, 233, 233)', //todo move to general css
        fontSize: 24,
        alignSelf: 'center'
    },
    button: {
        marginTop: 20
    },
});

export default styles;
