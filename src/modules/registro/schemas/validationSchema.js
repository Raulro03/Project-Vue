import * as yup from 'yup';


export const schema = yup.object({
    nombre: yup.string().required('El nombre es requerido').matches(/^[a-zA-Z]+$/, "El nombre de usuario solo puede contener letras"),
    email: yup.string().email('El email no es válido').required('El email es requerido')
});

