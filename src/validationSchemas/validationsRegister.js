import * as yup from "yup";

export const registerSchema = yup.object().shape({
    username: yup
    .string()
    .min(8, "El usuario debe tener al menos 8 caracteres")
    .max(40, "El usuario debe tener máximo 40 caracteres")
    .required("El usuario es requerido"),
    
    name: yup
    .string()
    .required("El nombre es requerido"),
    
    lastName: yup
    .string()
    .required("El apellido es requerido"),
    
    email: yup
    .string()
    .email("El email es inválido")
    .required("El email es requerido"),
    
    password: yup
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .max(40, "La contraseña debe tener máximo 40 caracteres")
    .required("La contraseña es requerida"),
    
    repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden")
    .required("La contraseña es requerida"),
    
      
})