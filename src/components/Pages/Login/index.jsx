import { Link, useHistory, Redirect} from "react-router-dom"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { FormStyle, Button, ButtonRed } from "./styles"
import {toast} from 'react-toastify'


function Login ({log, setLog, local}){
      

        const history = useHistory()
        const formSchema = yup.object().shape({
            nome:       yup.string().required('Nome é obrigatório').matches(/^[a-záàâãéèêíïóôõöúçñ ]+$/i ,('Nome deve conter apenas letras.')),
            senha:      yup.string().required('Senha é obrigatório').matches(/(?=^.{4,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, '4 Char, Upper, Lower, Carc.'),
        })


     
        
    
        const {register, handleSubmit, formState:{errors}} = useForm({
            resolver: yupResolver(formSchema)
        })

        


    
        const LoginOn = async (data) => {
            const pass = localStorage.getItem('@EntregaForm:senha')
            const user = localStorage.getItem('@EntregaForm:user')
            
            if(data.nome === user && data.senha === pass){
                toast.success('Logado com sucesso')
                history.push(`/home/${user}`)
                setLog(true)
                console.log(log)
                

            }else{
               toast.error('Usuario ou Login Invalidos')
                

            }
            console.log(pass, user, data)
            
            
    
        }


   
    
    
    
        if(log) {
            return <Redirect to={`/home/${local}`} /> }else{
            
    
        return(
            <FormStyle onSubmit={handleSubmit(LoginOn) }>
                <h2>Login...</h2>
                <input {...register('nome')} placeholder="Nome"/>
                <p>{errors.nome?.message}</p>
       
                <input {...register('senha')} placeholder="Senha"/>
                <p>{errors.senha?.message}</p>
    
                <button type="submit" >Entrar</button>
               
    
    
                <Link className="link" to={'/cadastro'}>Cadastrar</Link>
    
    
    
    
    
                
            </FormStyle>
    
    
        )
            }
      
}

export default Login