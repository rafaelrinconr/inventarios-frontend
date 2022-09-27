import React from 'react'
import {Link} from 'react-router-dom';

export const TipoRegistro = (props) => {
  
    const { tipoEquipo } = props;
        
    return (
     <tr>
         <td>{tipoEquipo.nombre}</td>
         <td>{tipoEquipo.estado}</td>
         <td>{tipoEquipo.fechaCreacion}</td>
         <td>{tipoEquipo.fechaActualizacion}</td>
         <td>
            <Link to={`tipos-equipos/edit/${tipoEquipo._id}`}>  
                <button type="button" className="btn btn-success">Editar</button>
            </Link> 
         </td>
     </tr>
    )
}
