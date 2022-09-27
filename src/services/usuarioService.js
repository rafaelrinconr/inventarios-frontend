import { axiosInstance } from '../helpers/axios-config';

const getUsuarios = () => {
    return axiosInstance.get('usuario', {
        headers: {
            'content-type': 'application/json'
        }
    })
}

const crearUsuarios = (data) => {
    return axiosInstance.post('usuario', data, {
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const editUsuario = (usuarioId, data) => {
    return axiosInstance.put(`usuario/${usuarioId}`, data, {
        headers:{
            'Content-type': 'application/json'
        }
    });
}

const getUsuarioPorId = (usuarioId) => {
    return axiosInstance.get(`usuario/${usuarioId }`, {
        headers:{
            'Content-type': 'application/json'
        }
    });
}



//todo: listar por id.

export {
    getUsuarios, crearUsuarios, editUsuario, getUsuarioPorId
}

