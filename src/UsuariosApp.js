import usuarios from './data/usuarios';
import React, {useState} from 'react'
import CrudForm from './components/UsuariosFormulario'
import { CrudTable } from './components/UsuariosTabla';
const UsuariosApp =()=>{
    const [db,setDb] = useState(usuarios); 
    const [usuarioPorActualizar,setUsuarioPorActualizar]=useState(null);

    const crearUsuario=(data)=>{
      data.id=Date.now();
      setDb([...db,data]);
    };
//Funcionalidad actualizar
    const actualizarUsuario=(data)=>{
        let nuevaData=db.map(el=>el.id===data.id?data:el);
        setDb(nuevaData);
    };
//Funcionalidad eliminar
    const eliminarUsuario=(id)=>{
      let nuevaData=db.filter(el=>el.id!=id);
      setDb(nuevaData);
    };

    return (
        <>
        <h2>Mantenedor</h2>
        <CrudForm 
            crearUsuario={crearUsuario} 
            actualizarUsuario={actualizarUsuario} 
            usuarioPorActualizar={usuarioPorActualizar}
            setUsuarioPorActualizar={setUsuarioPorActualizar}
        />
        <CrudTable 
            data={db}
            setUsuarioPorActualizar={setUsuarioPorActualizar}
            eliminarUsuario={eliminarUsuario} 
        />
        
        </>
    );
}



export default UsuariosApp;

