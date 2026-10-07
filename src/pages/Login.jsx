import { useState } from "react";

export default function Login(){
    const [errorEmptyNombre,setErrorEmptyNombre] = useState(false);
        const [errorEmptyPassword,setErrorEmptyPassword] = useState(false);
        const [errorPassLength,setPassLength] = useState(false);
        const [nombre, setNombre] = useState('');
        const [password, setPassword] = useState('');        
    
        function submitForm(e){
            e.preventDefault();
            if(!nombre.trim()){
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
            setErrorEmptyNombre(false)
            success()
        }
    
        function success(){
            alert('Login Exitoso. Bienvenid@! ' + nombre);
        }
        return(
            <>
            <div className="container">
            <h2>Login</h2>
                <form action="" className="form" onSubmit={submitForm}> 
                <div className="form-group">
                    <label >Nombre</label>
                    <input type="text" name="nombre" className="form-control" value={nombre} onChange={(e)=>{setNombre(e.target.value), setErrorEmptyNombre(false)}}/>
                </div>
                {errorEmptyNombre ? <p className="error">Nombre es requerido</p> : null}
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