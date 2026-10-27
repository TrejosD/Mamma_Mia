import { createContext, useEffect, useState } from "react";



export const UserContext = createContext();

const UserProvider = ({children})=>{
    const [token, setToken] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        console.log('Valor del TOKEN', token)
    },[token])

    const handleAuthenticationLogin = async (e) => {
        e.preventDefault();
        try {
                const response = await fetch('http://localhost:4000/api/auth/login',{
                method: 'POST',
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({email, password}),
            });
            const data = await response.json();
            console.log(data);
            localStorage.setItem('token', data.token);
            setEmail(data.email);
           verifyToken();
            } catch (error) {
            throw alert(error);
        }
    }

    const handleAuthenticationRegister = async (e) => {
        e.preventDefault();
        try {
                const response = await fetch('http://localhost:4000/api/auth/register',{
                method: 'POST',
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({email, password}),
            });
            const data = await response.json();
            localStorage.setItem('token', data.token);
            setEmail(data.email);
            verifyToken();
            } catch (error) {
                throw alert(data?.error);
            }
    }

    const verifyToken = () => {
        if(localStorage.getItem('token') !== null ){
            setToken(true);
            
        }else{
            setToken(false);
            
        }
    }

    const handleLogout = () =>{
        console.log('*****----LOGOUT-------****');
        setEmail('');
        localStorage.removeItem('token');
        verifyToken();
        navigate('/login');
    }

    const handleAuthenticationStatus = async(e)=>{
        console.log('----*****Check****-----');
        e.preventDefault();
        const userToken = localStorage.getItem('token');
        console.log('----*****USERTOKEN****-----');
        console.log(userToken);
        try {
                const response = await fetch('http://localhost:4000/api/auth/me',{
                headers: {
                    "Content-Type":"application/json",
                    Authorization: `Bearer ${userToken}`
                },
            });
            const data = await response.json();
            console.log('------****Token--******');
            console.log(localStorage.getItem('token'));
            console.log('------****Email--******');
            console.log(email);
            console.log('------****data--******');
            console.log(data);
            setEmail(data.email);
            verifyToken()
            } catch (error) {
                throw alert(data?.error);
            }

    }

    return(
        <UserContext.Provider value={{token, setToken, email, setEmail, password, setPassword, handleAuthenticationLogin, handleAuthenticationRegister, handleLogout, handleAuthenticationStatus}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;