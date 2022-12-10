import { Header } from "../../shared/components/Header"
import { Body } from "./styled";
import { Footer } from "../../shared/components/Footer";
import { useState } from "react";
import { idioma } from "../../types";
import { Resumo } from "./styled";
import { TechList } from "../../shared/components/techList";


export const Home = () => {

    const [language, setLanguage] = useState(idioma[0].pt);

    const handleLanguage=(Text:string) => {
        
        if (Text == 'Brasil') {
            setLanguage(idioma[0].pt)

        } else if (Text == 'Espanhol') {
            setLanguage(idioma[0].es)
          
        } else {
            setLanguage(idioma[0].en)
            
        }
       
    }
    
    return(
        <Body>
            <Header />
            <Resumo>
                {language}
            </Resumo>
            <TechList/>
            <Footer languages={(handleLanguage)}/>
        </Body>
    )
}