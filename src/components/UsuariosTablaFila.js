import React from 'react'

const CrudTableRow = ({elemento,setUsuarioPorActualizar,eliminarUsuario}) => {
    let {nombre,correo,id} =elemento;
    return (
        <tr>
        <td>{nombre}</td>
        <td>{correo}</td>
        <td><input type="button" onClick={()=>setUsuarioPorActualizar(elemento)} value="Editar" />
            <input type="button" onClick={()=>eliminarUsuario(id)} value="Eliminar"/>
        </td>
        </tr>
    )
}
export default CrudTableRow;
