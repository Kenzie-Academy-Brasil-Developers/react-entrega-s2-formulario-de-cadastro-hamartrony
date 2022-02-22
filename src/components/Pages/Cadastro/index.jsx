import { Link, useHistory } from "react-router-dom"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { FormStyle, Button, ButtonRed } from "./styles"

function Cadastro (){
    const history = useHistory()
    const formSchema = yup.object().shape({
        nome:       yup.string().required('Nome é obrigatório').matches(/^[a-záàâãéèêíïóôõöúçñ ]+$/i ,('Nome deve conter apenas letras.')),
        email:      yup.string().email('Digite um e-mail válido').required('Email é obrigatório.'),
        senha:      yup.string().required('Senha é obrigatório').matches(/(?=^.{4,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, '4 Char, Upper, Lower, Carc.'),
        senhaConf:  yup.string().oneOf([yup.ref('senha')], 'Senhas não conferem!').required('Campo obrigatório'),        
        

    })
    

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(formSchema)
    })

    const createUser = async (data) => {
        console.log(data)
        localStorage.setItem('@EntregaForm:user', data.nome)
        localStorage.setItem('@EntregaForm:senha', data.senha)
        history.push("")
    }





    
        

    return(
        <FormStyle onSubmit={handleSubmit(createUser)}>
            <h2>Cadastre-se Free</h2>
            <input {...register('nome')} placeholder="Nome"/>
            <p>{errors.nome?.message}</p>

            <input {...register('email')} placeholder="Email"/>
            <p>{errors.email?.message}</p>

            <input {...register('senha')} placeholder="Senha" type='password'/>
            <p>{errors.senha?.message}</p>

            <input {...register('senhaConf')} placeholder="Confirme a senha" type='password'/>
            <p>{errors.senhaConf?.message}</p>
            <button type="submit">Cadastrar</button>
           


           <Link to={'/'} className="link">Ja tenho conta</Link>





            
        </FormStyle>


    )
}

export default Cadastro