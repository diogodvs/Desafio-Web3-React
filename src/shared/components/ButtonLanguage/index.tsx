import { BtnLanguages } from "./styled";
import { IProps } from "../../../types";


export const Botao = ({ img, text, languages }: IProps) => {

    return (

        <BtnLanguages onClick={() => languages(text)}>
                <img src={img} alt={text} />
                {text}   
        </BtnLanguages>
    )
}