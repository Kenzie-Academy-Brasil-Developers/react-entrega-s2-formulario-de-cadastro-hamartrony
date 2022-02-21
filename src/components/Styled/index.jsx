import {React, useState} from "react"
import { DivStyle, Button, ButtonRed } from "./styles"



export default function Exemplo(){

    const [fontSize, setFontSize] = useState(12)
    const mais  = () => {setFontSize(fontSize+1)}
    const menos = () => {setFontSize(fontSize-1)}

    // DivStyle traz css para a div
    // Span envia tamanho da font por props
    // onClick altera o tamanho da fonte em +1
    return(
                <DivStyle fontSize={fontSize}>
                    <span>TESTE</span>
                    <h2>nao altera font</h2>

                    <Button     onClick={mais}>Aumenta font</Button>
                    <ButtonRed  onClick={menos}>Diminui font</ButtonRed>



                </DivStyle>
    )

}