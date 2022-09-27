import { axiosInstance } from '../helpers/axios-config';

const getTiposEquipos = () => {
    return axiosInstance.get('tipo-equipo', {
        headers: {
            'content-type': 'application/json'
        }
    })
}

const crearTiposEquipos = (data) => {
    return axiosInstance.post('tipo-equipo', data, {
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const editTiposEquipos = (tipoEquipoId, data) => {
    return axiosInstance.put(`tipo-equipo/${tipoEquipoId}`, data, {
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const getTiposEquiposPorId = (tipoEquipoId) => {
    return axiosInstance.get(`tipo-equipo/${tipoEquipoId}`, {
        headers:{
            'Content-type': 'application/json'
        }
    });
} 




export {
    getTiposEquipos, editTiposEquipos, crearTiposEquipos, getTiposEquiposPorId
}

