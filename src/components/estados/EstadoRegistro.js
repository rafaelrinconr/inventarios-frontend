import React from 'react'
import {Link} from 'react-router-dom';

export const EstadoRegistro = (props) => {
  
    const { estadoEquipo } = props;
      
    return (
       <tr>
        <td>{estadoEquipo.nombre}</td>
        <td>{estadoEquipo.estado}</td>
        <td>{estadoEquipo.fechaCreacion}</td>
        <td>{estadoEquipo.fechaActualizacion}</td>
        <td>
          <Link to={`estado-equipo/edit/${estadoEquipo._id}`}>  
            <button type="button" className="btn btn-success">Editar</button>
          </Link>
        </td>
      </tr>
  )
}
