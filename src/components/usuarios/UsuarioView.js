import React, { useState, useEffect } from 'react';
import { getUsuarios } from '../../services/usuarioService';
import { UsuarioRegistro} from './UsuarioRegistro';
import { crearUsuarios } from '../../services/usuarioService';
import Swal from 'sweetalert2';

export const UsuarioView = () => {

  const [ usuarios, setUsuarios] = useState([]);

  const [ valoresUsuario, setValoresUsuario ] = useState ({});
  const { nombre='', email='', estado } = valoresUsuario;


  const listarUsuarios = async () => {
    try {
      const {data} = await getUsuarios();
      console.log(data);
      setUsuarios(data);
    } catch (error) {
      console.log(error);
    }
  } 

  useEffect(() =>{
    listarUsuarios();
  }, []);

  
  const handleOnChange = ({target}) => {
    const { name, value } = target;
    setValoresUsuario({...valoresUsuario, [name]: value });
  }


  const handleOnSubmit = async (e) =>{
    e.preventDefault();
    const usuario = {
      nombre, email, estado
    }
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
    });
    Swal.showLoading();
      const { data } = await crearUsuarios(usuario);
      console.log(data); 
      Swal.close();
    } catch (error) {
      console.log(error, error.response);
        Swal.close();
        let mensaje;
        if (error && error.response && error.response.data){
            mensaje= error.response.data;
        }else{
            mensaje = 'ocurrio un error, por favor intente de nuevo';
        }
        Swal.fire('Error', mensaje, 'error');
    }
  }


  return (
  <div className="card m-4">
    <div className="card-header">
      <h1>Usuarios</h1>
    </div>
    <div className="card-body">
      <form onSubmit={(e)=> handleOnSubmit(e)}>
        <div className='row'>
            <div className='col'>
              <div className="mb-3">
                  <label  className="form-label">Nombre</label>
                  <input type="text" name='nombre' required onChange={(e) => handleOnChange(e)} value={nombre}  className="form-control"  />
              </div>
            </div>
            <div className='col'>
                <div className="mb-3">
                    <label  className="form-label">Email</label>
                    <input type="text" name='email' required onChange={(e) => handleOnChange(e) } value={email}  className="form-control"  />
                </div>
            </div>
            <div className='col'>
                <div className="mb-3">
                    <label  className="form-label">Estado</label>
                    <select className="form-select" required name='estado' onChange={(e) => handleOnChange(e) }>
                      <option>--Seleccionar--</option>
                      <option value="Activo">Activo</option>
                      <option value="Inactivo">Inactivo</option>
                    </select>
                </div>
            </div>
        </div>              
        <div className='row'>
          <div className='col'>
            <button className='btn btn-primary m-1'>Guardar</button>
          </div>
        </div>
      </form>
    </div>
    <div className='container-fluid'>
      <table className='table table-striped' >
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
            <th scope="col">Fecha Creación</th>
            <th scope="col">Fecha Actualización</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
            {
              usuarios.map((usuario)=>{
                return <UsuarioRegistro key={usuario._id} usuario={usuario} />              
              }) 
            }      
        </tbody>
      </table>
    </div>
  </div>   
  )
}
