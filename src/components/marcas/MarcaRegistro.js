import React from 'react'
import {Link} from 'react-router-dom';


export const MarcaRegistro = (props) => {
    
    const { marca } = props;
    
  
    return (
     <tr>
      <td>{marca.nombre}</td>
      <td>{marca.estado}</td>
      <td>{marca.fechaCreacion}</td>
      <td>{marca.fechaActualizacion}</td>
      <td>
      <Link to={`marcas/edit/${marca._id}`}>
        <button type="button" className="btn btn-success">Editar</button>
      </Link>
      </td>
     </tr>
    )
}