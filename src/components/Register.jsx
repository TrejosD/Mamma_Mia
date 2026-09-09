import { useState } from "react"
export default function Register(){
    const [errorEmptyNombre,setErrorEmptyNombre] = useState(false);
    const [errorEmptyPassword,setErrorEmptyPassword] = useState(false);
    const [errorPassNoCoincide,setPassNoCoincide] = useState(false);
    const [errorPassLength,setPassLength] = useState(false);
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function submitForm(e){
        e.preventDefault();
        if(!nombre.trim()){
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
        setErrorEmptyNombre(false)
        success()
    }

    function success(){
        alert('Todo correcto. Bienvenid@! ' + nombre);
    }
    return(
        <>
        <div className="container">
        <h2>Registro</h2>
            <form action="" className="form" onSubmit={submitForm}> 
            <div className="form-group">
                <label >Nombre</label>
                <input type="text" name="nombre" className="form-control" value={nombre} onChange={(e)=>{setNombre(e.target.value), setErrorEmptyNombre(false)}}/>
            </div>
            {errorEmptyNombre ? <p className="error">Nombre es requerido</p> : null}
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