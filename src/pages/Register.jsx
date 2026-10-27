import { useContext, useState } from "react"
import { UserContext } from "../contexts/UserContext";
export default function Register(){
    const [errorEmptyEmail,setErrorEmptyEmail] = useState(false);
    const [errorEmptyPassword,setErrorEmptyPassword] = useState(false);
    const [errorPassNoCoincide,setPassNoCoincide] = useState(false);
    const [errorPassLength,setPassLength] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const {handleAuthenticationRegister, email, setEmail, password, setPassword, token} = useContext(UserContext);

    async function submitForm (e){
        e.preventDefault();
        if(!email.trim()){
            setErrorEmptyNombre(true)
            return
        }else if(!password.trim() || !confirmPassword.trim()){ 
            setErrorEmptyPassword(true)
            return
        }else if(password != confirmPassword){
            setPassNoCoincide(true)
            return
        }else if(password.length < 6){
            setPassLength(true)
            return
        }
        setPassLength(false)
        setConfirmPassword(false)
        setErrorEmptyPassword(false)
        setErrorEmptyEmail(false)
        await handleAuthenticationRegister(e)
        success()

    }

    function success(){
        alert('Todo correcto. Bienvenid@! ' + email);
    }
    return(
        <>
        <div className="container">
        <h2>Registro</h2>
            <form action="" className="form" onSubmit={submitForm}> 
            <div className="form-group">
                <label >Email</label>
                <input type="email" name="email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value), setErrorEmptyEmail(false)}}/>
            </div>
            {errorEmptyEmail ? <p className="error">Email es requerido</p> : null}
            <div className="form-group">
                <label >Contraseña</label>
                <input type="password" name="password" className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value), setErrorEmptyPassword(false), setPassNoCoincide(false), setPassLength(false)}}/>
            </div>
            {errorEmptyPassword ? <p className="error">Contraseña es requerida</p> : null}
            {errorPassNoCoincide ? <p className="error">Contraseñas no coinciden</p> : null}
            {errorPassLength ? <p className="error">Contraseñas debe tener almenos 6 caracteres</p> : null}
            <div className="form-group">
                <label >Confirma Contraseña</label>
                <input type="password" name="confirm-password" className="form-control" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value), setPassNoCoincide(false)}} />
            </div>
            {errorPassNoCoincide ? <p className="error">Contraseñas no coinciden</p> : null}
            <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
            </>
    )
}