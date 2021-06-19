// aca tengo que poner un monton de inputs 

import React from 'react';
import {View, Text} from "react-native";
import { useState } from 'react/cjs/react.production.min';
import Input from "../components/Input";

function Register() {
    //tengo que poner state para que no pongan cualquier cosa e ir checkeando
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <View>
            <Text>Bienvenido a bordo!</Text>
            <Input label="Nombre de usuario" />
            <Input label="Email" />
            <Input label="Password" secureTextEntry />
            <Input label="Confirmar Password" secureTextEntry/>
        </View>
    );
}

export default Register;