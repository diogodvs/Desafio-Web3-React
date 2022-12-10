import { Botao } from "../ButtonLanguage"
import braFlag from '../../../assets/images/bra.png'
import euaFlag from '../../../assets/images/eua.png'
import spaFlag from '../../../assets/images/spa.png' 
import { ContainerFooter } from "./styled"
import { IFooter } from "../../../types"


export const Footer = ({languages}: IFooter) => {

    return(

        <ContainerFooter>

            <Botao img={braFlag} text="Brasil" languages={ languages } />
           
            <Botao img={euaFlag} text="Inglês" languages={ languages }/>
           
            <Botao img={spaFlag} text="Espanhol" languages={ languages }/>
        
        </ContainerFooter>

    )
}