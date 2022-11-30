import React, {createContext, useState} from "react";
import {UserModel, UserTokenVO} from "../utils/@Types";
import {Credentials} from "../components/FromSign";
import {api} from "../services/api";


type Props = {
    children: React.ReactNode
}

const AuthContext = createContext({});
const user_: UserModel = {
    name: "sekai",
    email: "user",
    password: "password"
}
 const AuthProvider = ({children} : Props) =>{

    const [tokenVO,setTokenVO] = useState<UserTokenVO | null>(null);
    const [user,setUser] = useState<UserModel | null>(null);

    function sign(user: Credentials){
        api.post("/auth/sign", user).then((response)=>{
            let data : UserTokenVO = response.data
            setTokenVO(data);
            getUserFromEmail(data.email);
            window.alert("Login efetuado com sucesso, seja bem-vindo "+response.data.email)
        }).catch((error)=>{
            console.log(error.code)
            error.code === "ERR_BAD_REQUEST" && window.alert("email or password incorrect")
            // window.alert(error.message);
        })
    }
    function signUp(user: Credentials){
        api.post("/auth/signup", user).then(()=>{
            window.alert("Conta criada com sucesso!!, Efetue o login")
        }).catch((error)=>{
            console.log(error.code)
            error.code === "ERR_BAD_REQUEST" && window.alert("email or password incorrect")
            // window.alert(error.message);
        })
    }

    function getUserFromEmail(email: string){
        api.get(`/auth/user/${email}`).then(response => {
            let data: UserModel = response.data
            setUser(data);
        });

    }

    return(
        <AuthContext.Provider value={{user, setUser, sign, signUp}}>
            {children}
        </AuthContext.Provider>
    );

}

export {AuthContext, AuthProvider, user_}