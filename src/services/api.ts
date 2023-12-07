import axios from 'axios';
import {getData, storeData} from "./util";
import {ACCESS_TOKEN, API_BASE_URL} from "../constants/common";
import {PROFILE, STUB_CURRENT_USER, STUB_SIGN_UP, STUB_TOKEN} from "../util/stub";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    },
});


const IS_USING_STUB = false;

interface ISignInResponse {
    token: string;
}

export async function signIn(signInRequest) {
    if (!IS_USING_STUB) {
        return await api.post<ISignInResponse>("/auth/signin", signInRequest).then(resp => resp.data);
    } else {
        return STUB_TOKEN
    }
}

interface ISignUpResponse {
    token: string;
}

export async function signUp(signUpRequest) {
    if (!IS_USING_STUB) {
        return api.post<ISignUpResponse>("/auth/signup", signUpRequest);
    } else {
        return STUB_SIGN_UP
    }
}

export async function loadTasks() {
    if (!IS_USING_STUB) {
        const token = await getData(ACCESS_TOKEN);
        const config = {
            headers: {  }
        };

        const api1 = axios.create({
            baseURL: API_BASE_URL,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        });
        return api1.get<ITaskResponse[]>("/tasks", config).then(resp => resp.data);
    } else {
        return []
    }
}

export async function createTask(taskDto) {
    if (!IS_USING_STUB) {
        const token = await getData(ACCESS_TOKEN);
        const config = {
            headers: {   Authorization: `Bearer ${token}` }
        };
        return api.post<ITaskResponse[]>("/tasks", taskDto, config).then(resp => resp.data);
    } else {
        return []
    }
}

export async function updateTask(taskId, taskDto) {
    if (!IS_USING_STUB) {
        const token = await getData(ACCESS_TOKEN);
        const config = {
            headers: {   Authorization: `Bearer ${token}` }
        };
        return api.put<ITaskResponse[]>(`/tasks/${taskId}`, taskDto, config).then(resp => resp.data);
    } else {
        return []
    }
}


interface ICurrentUser {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
}

export async function getCurrentUser() {
   /* if (!IS_USING_STUB) {
        return api.get<ICurrentUser>("/auth/me");
    } else {
        return STUB_CURRENT_USER
    }*/
    return STUB_CURRENT_USER
}

interface ILessonResponse {
    id: number;
    title: string;
    description: string;
    video: string;
    learningTime: number
}
interface ITaskResponse {
    id: number;
    body: string;
    isCompleted: boolean;
}


export async function getProfile(userId) {
    const token = await getData(ACCESS_TOKEN);
    const config = {
        headers: {  }
    };

    const api1 = axios.create({
        baseURL: API_BASE_URL,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    });
    return api1.get<ICurrentUser>(`/users/${userId}`, config).then(resp => resp.data);
}




