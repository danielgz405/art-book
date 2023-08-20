import { View } from "react-native";
import { Route, Routes } from "react-router-native";
import Welcome from "../components/Home/Welcome";
import Login from "./login/login";
import { useState } from "react";

export default function Main(){
    const [auth, setAuth] = useState(null);
    return (
        <View style={{ flex: 1 }}>
            <Routes>
                <Route path='/' element={<Welcome />} />
                <Route path='/Login' element={<Login auth={auth} setAuth={setAuth} />} />
            </Routes>
        </View>
    )
} 