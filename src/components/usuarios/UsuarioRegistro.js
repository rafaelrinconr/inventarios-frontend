import React,{ useState} from 'react'
import {Link} from 'react-router-dom';


export const UsuarioRegistro = (props) => {
    
    const { usuario } = props;
    
    
    return (
      <tr>
        <td>{usuario.nombre}</td>
        <td>{usuario.email}</td>
        <td>{usuario.estado}</td>
        <td>{usuario.fechaCreacion}</td>
        <td>{usuario.fechaActualizacion}</td>
        <td>
          <Link to={`usuarios/edit/${usuario._id}`}>  
            <button type="button" className="btn btn-success">Editar</button>
          </Link>
        </td>
      </tr>

  )
}

