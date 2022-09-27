import React, { useState, useEffect } from 'react';
import { getEstadosEquipos } from '../../services/estadoEquipoService';
import { crearEstadosEquipos } from '../../services/estadoEquipoService';
import { EstadoRegistro } from './EstadoRegistro';
import Swal from 'sweetalert2';

export const EstadoView = () => {

  const [ estadosEquipos, setEstados] = useState([]);

  const [ valoresEstado, setValoresEstado ] = useState ({});
  const { nombre='', estado } = valoresEstado;

  const listarEstados = async () => {
    try {
      const {data} = await getEstadosEquipos();
      console.log(data);
      setEstados(data);
    } catch (error) {
      console.log(error);
    }
  }  

  useEffect(() =>{
    listarEstados();
  }, []);

  const handleOnChange = ({target}) => {
    const { name, value } = target;
    setValoresEstado({...valoresEstado, [name]: value });
  }

  const handleOnSubmit = async (e) =>{
    e.preventDefault();
    const estadoEquipo = {
      nombre, estado
    }
    try {
     Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
    });
    Swal.showLoading();
      const { data } = await crearEstadosEquipos(estadoEquipo);
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
      <h1>Estados de equipo</h1>
    </div>
    <div className="card-body">
      <form onSubmit={(e)=> handleOnSubmit(e)}>
        <div className='row'>
            <div className='col-8'>
              <div className="mb-3">
                  <label  className="form-label">Nombre</label>
                  <input type="text" name='nombre' required onChange={(e) => handleOnChange(e)} value={nombre}  className="form-control"  />
              </div>
            </div>
            <div className='col-4'>
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
            <th scope="col">Status</th>
            <th scope="col">Fecha Creación</th>
            <th scope="col">Fecha Actualización</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {
              estadosEquipos.map((estadoEquipo)=>{
                return <EstadoRegistro key={estadoEquipo._id} estadoEquipo={estadoEquipo} />              
              }) 
          } 
        </tbody>
      </table>
    </div>
  </div>
  )
}
