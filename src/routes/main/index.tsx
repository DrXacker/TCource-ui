import {NavigationContainer} from "@react-navigation/native";
import React from "react";


import Toast from "react-native-toast-message";
import {AuthContext} from "../../context/AuthContext";
import {getData, storeData} from "../../services/util";
import {StatusBar} from "react-native";

import {ACCESS_TOKEN} from "../../constants/common";
import {STUB_TOKEN, STUB_CURRENT_USER} from "../../util/stub";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SignInScreen from "../../pages/auth/signIn";
import SignUpScreen from "../../pages/auth/signUp";
import HomeScreen from "../home";
import {getCurrentUser, signIn, signUp} from "../../services/api";

const Stack = createNativeStackNavigator();

export default function Route() {
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case "SIGN_IN":
                    return {
                        ...prevState,
                        currentUser: action.currentUser,
                        isAuthenticated: true,
                        isLoading: false,
                    }
                case "SIGN_UP":
                    return {
                        ...prevState,
                        currentUser: null,
                        isAuthenticated: false,
                        isLoading: false,
                    }
                case "SIGN_OUT":
                    return {
                        ...prevState,
                        currentUser: null,
                        isAuthenticated: false,
                        isLoading: false,
                    };
                case "INIT":
                    return {
                        ...prevState,
                        currentUser: action.currentUser,
                        isAuthenticated: action.isAuthenticated,
                        isLoading: false,
                    };
                case "LOADING":
                    return {
                        ...prevState,
                        isLoading: true,
                    };
            }
        },
        {
            currentUser: null,
            isAuthenticated: false,
            isLoading: false,
        }
    );

    React.useEffect(() => {
        const bootstrapAsync = async () => {
            dispatch({type: "LOADING"})
            const token = await getData(ACCESS_TOKEN);
            if (token != null) {
                const currentUser = STUB_CURRENT_USER // todo use fetch here
                if (currentUser != null) {
                    dispatch({
                        type: "INIT",
                        currentUser: currentUser,
                        isAuthenticated: true,
                    });
                } else {
                    dispatch({
                        type: "INIT",
                        currentUser: null,
                        isAuthenticated: false,
                    });
                }
            } else {
                dispatch({
                    type: "INIT",
                    currentUser: null,
                    isAuthenticated: false,
                });
            }
        };
        bootstrapAsync().then()
    }, [])


    const authHooks = React.useMemo(
        () => ({
            signIn: async (signInRequest) => {
                dispatch({type: "LOADING"})
                // @ts-ignore
                const {token} = await signIn(signInRequest);
                console.log(token)
                await storeData(ACCESS_TOKEN, token);
                const currentUser = await getCurrentUser()
                dispatch({
                    type: "INIT",
                    currentUser: currentUser,
                    isAuthenticated: true,
                });
            },
            signUp: async (signUpRequest) => {
                dispatch({type: "LOADING"})
                await signUp(signUpRequest);
                dispatch({
                    type: "INIT",
                    currentUser: null,
                    isAuthenticated: false,
                });
            },
            signOut: async () => {
                await storeData(ACCESS_TOKEN, null);
                dispatch({type: "SIGN_OUT"});
            },
        }),
        []
    );

    return (
        <NavigationContainer>
            <AuthContext.Provider value={{"authState": state, authHooks}}>
                <StatusBar barStyle="dark-content" backgroundColor="#F0EDF5"/>
                <Stack.Navigator
                    screenOptions={() => ({
                        headerShown: false,
                        tabBarStyle: {
                            paddingHorizontal: 5,
                            paddingTop: 0,
                            borderTopWidth: 0,
                        },
                    })}
                >
                    {
                        state.isAuthenticated ?
                            <Stack.Screen name="home" component={HomeScreen} options={{headerShown: false}} />
                            :
                            <>
                                <Stack.Screen name="signIn" component={SignInScreen} />
                                <Stack.Screen name="signUp" component={SignUpScreen} />
                            </>
                    }
                </Stack.Navigator>
            </AuthContext.Provider>
            <Toast />
        </NavigationContainer>
    )
}
