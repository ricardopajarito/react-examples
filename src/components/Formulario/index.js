import React from 'react'
import { useForm } from "react-hook-form"
import "./index.css"
// Formulario con react hook form

const Formulario = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({mode: "onChange"});

    const patterns = {
        name: /^[A-Za-z]+$/i,
        mail: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        phone: /^[0-9]+$/i
    }
    const messages = {
        req: "Este campo es obligatorio",
        name: "El formato introducido no es el correcto",
        mail: "Debes introducir una dirección correcta",
        phone: "Debes introducir un número correcto"
    }

    const onSubmit = (userInfo) => {
        console.log("userInfo: ", userInfo);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Nombre completo</label>
            <input {...register("name", {
                required: messages.req,
                pattern: {
                    value: patterns.name,
                    message: messages.name
                }
            })} />
            {errors.name && <p>{errors.name.message}</p>}
            <label htmlFor="mail">Correo electrónico</label>
            <input
                name="mail"
                type="text"
                {...register("mail", {
                    required: messages.req,
                    pattern: {
                        value: patterns.mail,
                        message: messages.mail
                    }
                })} />
            {errors.mail && <p>{errors.mail.message}</p>}
            <label htmlFor="phone">Teléfono móvil</label>
            <input
                name="phone"
                type="tel"
                placeholder="+34"
                {...register("phone", {
                    required: messages.req,
                    minLength: {
                        value: 9,
                        message: messages.phone
                    },
                    maxLength: {
                        value: 9,
                        message: messages.phone
                    },
                    pattern: {
                        value: patterns.phone,
                        message: messages.phone
                    }
                })} />
            {errors.phone && <p>{errors.phone.message}</p>}
            <input type="submit" />
        </form>
    )
}

export default Formulario