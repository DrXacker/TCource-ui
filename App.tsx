import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import Route from "./src/routes/main";

export default function App() {
    return (
        <View style={{ flex: 1, backgroundColor: 'white'}}>
            <Route />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
