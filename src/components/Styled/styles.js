import styled from "styled-components";


export const DivStyle = styled.div`
    background-color: aqua;
    height: 200px;
    width: 200px;

    span{
        font-size: ${(props) => `${props.fontSize}px`};
        color: red;
    }

`
//css elemento button
export const Button = styled.button`
    background-color: blue;
    color: white;
`
//heranca css elemento button, alterando a cor
export const ButtonRed = styled(Button)`
    background-color: red;
`
