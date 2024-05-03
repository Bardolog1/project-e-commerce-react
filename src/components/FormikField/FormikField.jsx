import {  useField } from 'formik';
import React from 'react'
import InputDefault from '../InputDefault/InputDefault';

const FormikField  = ({ name, ...props }) => {

        const [field, meta, helpers ] = useField(name);
        return (
            <>
            <InputDefault
                error={meta.error}
                value={field.value}
                onChange={(e) => helpers.setValue(e.target.value)}
                {...props }
            >
            </InputDefault>
            </>
        );
    };
    

export default FormikField;