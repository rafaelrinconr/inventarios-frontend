import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTiposEquiposPorId, editTiposEquipos } from '../../services/tipoEquipoService';
import Swal from 'sweetalert2';

export const TipoUpdate = () => {
    
    const {tipoEquipoId = ''} = useParams();   
    const[valoresForm, setValoresForm ] = useState({});
    const[tipoEquipo, setTiposEquipos] = useState([]);

    const{ nombre='', estado} = valoresForm;
 
    
    useEffect(() => {
        setValoresForm({
            nombre: tipoEquipo.nombre,
            estado: tipoEquipo.estado,
        });
    }, [ tipoEquipo ]);

    const getTiposEquipos = async () => {
        try {
           Swal.fire({
               allowOutsideClick: false,
                text: 'Cargando...'
             });
             Swal.showLoading();
           const { data } = await getTiposEquiposPorId(tipoEquipoId)
           setTiposEquipos(data);
           Swal.close();
        } catch (error) { 
           console.log(error);
           Swal.close();
        }
   }
 
   useEffect (()=>{
    getTiposEquipos();
}, [ tipoEquipoId ]);

const handleOnChange = ({target})=>  {
    const { name, value } = target;
    setValoresForm({...valoresForm, [name]: value});
}


const handleOnSubmit = async (e) => {
    e.preventDefault();
    const tipoEquipo = {
        nombre, estado}
    try{
        Swal.fire({
            allowOutsideClick: false,
            text: 'Cargando...'
        });
        Swal.showLoading();
        const {data} = await editTiposEquipos(tipoEquipoId, tipoEquipo);
        console.log(data);
        Swal.close();
    }catch(error){
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
        <div className= 'container-fluid mt-3 mb-2'>
            <div className='card'>
                <div className='card-header'>
                    <h4 className='card-title'>Editar tipos de equipos</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={(e)=> handleOnSubmit(e)}>
                        <div className='row'>
                            <div className='col'>
                                <div className="mb-3">
                                    <label  className="form-label">Nombre</label>
                                    <input type="text" name='nombre' required  value={nombre} onChange={(e) => handleOnChange(e)}  className="form-control"  />
                                </div>
                            </div>
                            <div className='col'>
                                <div className="mb-3">
                                    <label  className="form-label">Estado</label>
                                    <select className="form-select" required name='estado' value={estado} onChange={(e) => handleOnChange(e)}>
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
            </div>
        </div>
    )
}
