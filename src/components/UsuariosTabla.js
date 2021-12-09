import React from 'react'
import CrudTableRow from './UsuariosTablaFila'

export const CrudTable = ({data,setUsuarioPorActualizar,eliminarUsuario}) => {
    return (
        <div>
            <h3> Tabla de Datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    data.length===0?
                    <tr><td colSpan="3">Sin datos</td></tr>:
                    data.map(el=> 
                    <CrudTableRow key={el.id} elemento={el} 
                        setUsuarioPorActualizar={setUsuarioPorActualizar} 
                        eliminarUsuario={eliminarUsuario}
                    />)
                    }
                </tbody>

            </table>
        </div>
    )
}
