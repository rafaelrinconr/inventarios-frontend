import { axiosInstance } from '../helpers/axios-config';

const getEstadosEquipos = () => {
    return axiosInstance.get('estado-equipo', {
        headers: {
            'content-type': 'application/json'
        }
    })
}

const crearEstadosEquipos = (data) => {
    return axiosInstance.post('estado-equipo', data, {
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const editEstadosEquipos = (estadoEquipoId, data) => {
    return axiosInstance.put(`estado-equipo/${estadoEquipoId}`, data, {
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const getEstadosEquiposPorId = (estadoEquipoId) => {
    return axiosInstance.get(`estado-equipo/${estadoEquipoId}`, {
        headers:{
            'Content-type': 'application/json'
        }
    });
}




export {
    getEstadosEquipos, crearEstadosEquipos,editEstadosEquipos, getEstadosEquiposPorId
}

