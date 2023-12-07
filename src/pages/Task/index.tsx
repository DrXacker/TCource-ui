import { View, Text, StyleSheet } from 'react-native';

export const Task = (props) => {
    return (
        props.completed ?
            <View style={props.theme ? styles.item_disabled : styles.item_disabled_dark}>
                <View style={styles.itemLeft}>
                    <View style={styles.square}></View>
                    <Text style={props.theme ? styles.itemText_disabled : styles.itemText_disabled_dark}>{props.text}</Text>
                </View>
                <View style={styles.circular}></View>
            </View> :
            <View style={props.theme ? styles.item : styles.item_dark}>
                <View style={styles.itemLeft}>
                    <View style={styles.square}></View>
                    <Text style={props.theme ? styles.itemText : styles.itemText_dark}>{props.text}</Text>
                </View>
                <View style={styles.circular}></View>
            </View>
    )
}


const styles = StyleSheet.create({
    item: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20
    },
    item_disabled: {
        backgroundColor: "#ddd",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20
    },
    item_dark: {
        backgroundColor: "#555",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20
    },
    item_disabled_dark: {
        backgroundColor: "#222",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap"
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: "#55f",
        opacity: .4,
        borderRadius: 5,
        marginRight: 15
    },
    itemText: {
        maxWidth: "80%",
    },
    itemText_disabled: {
        maxWidth: "80%",
        color: "#999",
    },
    itemText_dark: {
        maxWidth: "80%",
        color: "white",
    },
    itemText_disabled_dark: {
        maxWidth: "80%",
        color: "#777",
    },
    circular: {
        width: 10,
        height: 10,
        borderRadius: 5,
        borderWidth: 3,
        borderColor: "#55f"
    },
});