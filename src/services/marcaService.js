import { axiosInstance } from '../helpers/axios-config';

const getMarcas = () => {
    return axiosInstance.get('marca', {
        headers: {
            'content-type': 'application/json'
        }
    })
}

const crearMarcas = (data) => {
    return axiosInstance.post('marca', data, {
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const editMarcas = (marcaId, data) => {
    return axiosInstance.put(`marca/${marcaId}`, data, {
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const getMarcaPorId = (marcaId) => {
    return axiosInstance.get(`marca/${marcaId}`, {
        headers:{
            'Content-type': 'application/json'
        }
    });
}


export {
    getMarcas, crearMarcas, editMarcas, getMarcaPorId
}

