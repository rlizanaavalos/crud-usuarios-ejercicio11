import React, {useState,useEffect} from 'react'
const valorInicialForm={
    id:null,
    nombre:"",
    correo:""
}
const CrudForm = ({crearUsuario,actualizarUsuario,
    usuarioPorActualizar,setUsuarioPorActualizar}) => {
    const [form,setForm]=useState(valorInicialForm);

    useEffect(()=>{
        if(usuarioPorActualizar){
            setForm(usuarioPorActualizar);
        }
        else{
            setForm(valorInicialForm);
        }
    },[usuarioPorActualizar])
    
    const handleCambios=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!form.nombre || !form.correo){
            alert("Datos incompletos");
            return;
        }
        if(form.id===null){
            crearUsuario(form);
        }
        else{
            actualizarUsuario(form);
        }
        handleReset();

    };
    const handleReset=(e)=>{
        setForm(valorInicialForm);
        setUsuarioPorActualizar(null)
    };

    return (
        <div>
            <h3>{usuarioPorActualizar?"Editar":"Agregar"}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" placeholder="Nombre" 
                onChange={handleCambios} value={form.nombre} />

                <input type="email" name="correo" placeholder="Correo" 
                onChange={handleCambios} value={form.correo} />

                <input type="submit" value="Guardar"></input>
                <input type="reset" value="Limpiar" 
                onClick={handleReset}></input>
            </form>
            
        </div>
    )
}

export default CrudForm;
