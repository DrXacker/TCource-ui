import React, {useEffect, useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import {AuthContext} from "../../context/AuthContext";
import {buttonStyles} from "../../styles";
import UserAvatar from 'react-native-user-avatar';
import {getProfile} from "../../services/api";


interface ProfileModel {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
}


const Profile: React.FC = () => {
    // @ts-ignore
    const {authState, authHooks} = React.useContext(AuthContext);

    const [profile, setProfile] = useState({} as ProfileModel);

    useEffect(() => {
        async function loadProfile() {
            const profile: ProfileModel = await getProfile(authState.currentUser.id);
            console.log("PROFILE", profile)
            setProfile(profile);
        }

        loadProfile().then();
    }, []);

    return (
        <View style={styles.container}>
            <View>
                <Text style={{fontSize: 20}}>Профиль</Text>
                <View style={{marginTop: 25, height: 100, backgroundColor: '#fff', padding: 20, borderRadius: 16}}>
                    <View style={{flex: 1, flexDirection: "row", height: 100}}>
                        <UserAvatar size={60} name={`${profile.firstName} ${profile.lastName}`} />
                        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                            <Text style={{fontSize: 24}}>{`${profile.firstName} ${profile.lastName}`}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity
                style={[styles.button, buttonStyles.primaryButton, {marginTop: 40}]}
                onPress={() => authHooks.signOut()}>
                <Text style={buttonStyles.primaryButtonText}>Выйти</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Profile;