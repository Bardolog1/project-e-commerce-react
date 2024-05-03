import * as yup from "yup";

export const loginSchema = yup.object().shape({
    
    username: yup
    .string()
    .required("El usuario es requerido"),
    
    password: yup
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .max(40, "La contraseña debe tener máximo 40 caracteres")
    .required("La contraseña es requerida"),
})