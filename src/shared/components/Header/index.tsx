
import {ContainerNavBar} from './styled'
import logo from '../../../assets/images/logo.png'

export const Header = () =>{
    
    return(
        <ContainerNavBar>
            <img src={logo} alt="Logo StackX"/>
        </ContainerNavBar>
    );

}


