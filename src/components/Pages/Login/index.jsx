import { Link, useHistory } from "react-router-dom"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { FormStyle, Button, ButtonRed } from "./styles"

function Login (){
        const history = useHistory()
        const formSchema = yup.object().shape({
            nome:       yup.string().required('Nome é obrigatório').matches(/^[a-záàâãéèêíïóôõöúçñ ]+$/i ,('Nome deve conter apenas letras.')),
            senha:      yup.string().required('Senha é obrigatório').matches(/(?=^.{4,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, '4 Char, Upper, Lower, Carc.'),
        })
        
    
        const {register, handleSubmit, formState:{errors}} = useForm({
            resolver: yupResolver(formSchema)
        })
    
        const createUser = async (data) => {
            console.log(data)
            history.push("/home")
    
    
        }
   
    
    
    
        
            
    
        return(
            <FormStyle onSubmit={handleSubmit(createUser)}>
                <h2>Login...</h2>
                <input {...register('nome')} placeholder="Nome"/>
                <p>{errors.nome?.message}</p>
       
                <input {...register('senha')} placeholder="Senha"/>
                <p>{errors.senha?.message}</p>
    
                <button type="submit">Entrar</button>
               
    
    
                <Link className="link" to={'/cadastro'}>Cadastrar</Link>
    
    
    
    
    
                
            </FormStyle>
    
    
        )
      
}

export default Login