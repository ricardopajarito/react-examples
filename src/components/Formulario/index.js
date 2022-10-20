import React, {useState} from 'react'
import { useForm } from "react-hook-form"
import "./index.css"
// Formulario con react hook form

const Formulario = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });
    const [enviando, setEnviando] = useState(false);

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
        setEnviando(data => !data);
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row'>
                    <input 
                        required
                        className={errors.name ? 'input-error' : ''}
                        {...register("name", {
                        required: messages.req,
                        pattern: {
                            value: patterns.name,
                            message: messages.name
                        }
                    })} />
                    <span className={'bar ' + (errors.name ? 'span-error' : '')}></span>
                    <label htmlFor="name">Nombre completo</label>
                    <p> {errors.name && <span>{errors.name.message}</span>}</p>
                </div>
                <div className='row'>
                    <input
                        required
                        name="mail"
                        type="text"
                        className={errors.mail ? 'input-error' : ''}
                        {...register("mail", {
                            required: messages.req,
                            pattern: {
                                value: patterns.mail,
                                message: messages.mail
                            }
                        })} />
                    <span className={'bar ' + (errors.mail ? 'span-error' : '')}></span>
                    <label htmlFor="mail">Correo electrónico</label>
                    <p>{errors.mail && <span>{errors.mail.message}</span>}</p>
                </div>
                <div className='row'>
                    <input
                        required
                        name="phone"
                        type="tel"
                        className={ errors.phone ? 'input-error' : '' }
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
                    <span className={'bar ' + (errors.phone ? 'span-error' : '')}></span>
                    <label htmlFor="phone">Teléfono móvil</label>
                    <p>{errors.phone && <span>{errors.phone.message}</span>}</p>
                </div>
                <button type="submit" className='btn-form'>{ enviando ? <div className='spinner'></div> : 'Enviar'}</button>
            </form>
        </div>
    )
}

export default Formulario