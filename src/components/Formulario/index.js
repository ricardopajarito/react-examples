import React from 'react'
import { useForm } from "react-hook-form"
import "./index.css"
// Formulario con react hook form

const Formulario = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });

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
        <div className='form-container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row'>
                    <label htmlFor="name">Nombre completo</label>
                    <input {...register("name", {
                        required: messages.req,
                        pattern: {
                            value: patterns.name,
                            message: messages.name
                        }
                    })} />
                    <p> {errors.name && <span>{errors.name.message}</span>}</p>
                </div>
                <div className='row'>
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
                    <p>{errors.mail && <span>{errors.mail.message}</span>}</p>
                </div>
                <div className='row'>
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
                    <p>{errors.phone && <span>{errors.phone.message}</span>}</p>
                </div>
                <button type="submit" className='btn-form'>Enviar</button>
            </form>
        </div>
    )
}

export default Formulario