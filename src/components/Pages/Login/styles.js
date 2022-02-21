import styled from "styled-components";


export const FormStyle = styled.form`
    background-color: #4682B4 ;
    border-radius: 15px;
    width: 250px;
    height: 400px;
    padding: 15px;

    textarea:focus, input:focus, select:focus {
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0px;
} 
    input:first-child{margin-top:15px;}

    input{
        border: none;
        background-color: rgba(127,255,212, 0.3);
        width: 200px;
        height: 25px;
        border-radius: 10px;
        margin-bottom: 30px;
        color: black;
        font-size: 18px;
        padding: 3px;
    }

    input:focus{
        border: none;
        background-color: rgba(127,255,212, 0.7);
    }

    input::placeholder{
        color: white;
        font-size: 10px;
        
    }

    h2{
        font-size: 25px;
    }
    
    p{
        position:absolute;
        margin-left: 25px;
        margin-top: -27px;
        font-size: 10px;
        color: red;
       
    }

    span{
        font-size: ${(props) => `${props.fontSize}px`};
        color: red;
    }

    button{
        border: none;
        background-color: rgba(127,255,212, 0.3);
        width: 250px;
        height: 25px;
        border-radius: 10px;
        color: white;
        font-weight: 800;

    }

    .link{
        color:white;
        font-size: 12px;
        text-decoration: none;
        
    }

    

`
