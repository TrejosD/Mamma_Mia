import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {UserContext} from "../contexts/UserContext"


export default function Login(){
    const [errorEmptyEmail,setErrorEmptyEmail] = useState(false);
        const [errorEmptyPassword,setErrorEmptyPassword] = useState(false);
        const [errorPassLength,setPassLength] = useState(false);
        const navigate = useNavigate();
        const {email, setEmail, password, setPassword, handleAuthenticationLogin} = useContext(UserContext); 
    
        const handleSubmit = async (e)=>{
            e.preventDefault();
            if(!email.trim()){
                setErrorEmptyNombre(true)
                return
            }else if(!password.trim()){ 
                setErrorEmptyPassword(true)
                return
            }else if(password.length < 6){
                setPassLength(true)
                return
            }
            setPassLength(false)
            setErrorEmptyPassword(false)
            setErrorEmptyEmail(false)
            await handleAuthenticationLogin(e);
            success()
        }

        function success(){
            alert('Login Exitoso. Bienvenid@! ' + email);
        }
        return(
            <>
            <div className="container">
            <h2>Login</h2>
                <form action="" className="form" onSubmit={handleSubmit}> 
                <div className="form-group">
                    <label >Email</label>
                    <input type="text" name="email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value), setErrorEmptyEmail(false)}}/>
                </div>
                {errorEmptyEmail ? <p className="error">Email es requerido</p> : null}
                <div className="form-group">
                    <label >Contraseña</label>
                    <input type="password" name="password" className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value), setErrorEmptyPassword(false), setPassLength(false)}}/>
                </div>
                {errorEmptyPassword ? <p className="error">Contraseña es requerida</p> : null}
                {errorPassLength ? <p className="error">Contraseñas debe tener almenos 6 caracteres</p> : null}
                <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
                </>
        )
}