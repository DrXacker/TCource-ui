import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";
import Profile from "../../pages/Profile";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {TaskList} from "../../pages/TaskList";

const Home = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
        <Home.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Home.Screen name="BottomTap" component={TabRoutes} />
            <Home.Screen name="Course" component={TaskList} />
        </Home.Navigator>
    )
}


const TabRoutes: React.FC = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color }) => {
                const icons = {
                    Home: 'home',
                    Profile: 'user',
                    Courses: 'list',
                };

                return (
                    <Icon
                        name={icons[route.name]}
                        color={color}
                        size={20}
                    />
                );
            },
        })}
    >
        <Tab.Screen name="Home" component={TaskList} options={{ title: 'Лист' }} />
        <Tab.Screen name="Profile" component={Profile} options={{ title: 'Профиль' }} />
    </Tab.Navigator>
)

export default HomeScreen;
