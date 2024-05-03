import * as yup from "yup";

export const registerSchema = yup.object().shape({
    username: yup
    .string()
    .min(8, "El usuario debe tener al menos 8 caracteres")
    .max(40, "El usuario debe tener máximo 40 caracteres")
    .matches(/^[a-zA-Z0-9]+$/, "El usuario solo puede tener letras y números")
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
    .matches( /(?=.*[0-9])/, "Debe tener al menos un número")
    .matches( /(?=.*[A-Z])/, "Debe tener al menos una mayúscula")
    .matches( /(?=.*[a-z])/, "Debe tener al menos una minúscula")
    .matches( /(?=.*[!@#$%^&*])/, "Debe tener al menos un caracter especial")
    .required("La contraseña es requerida"),
    
    repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden")
    .required("La contraseña es requerida"),
    
      
})