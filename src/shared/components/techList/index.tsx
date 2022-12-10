
import { stacks } from "../../../types";
import { ContainerList } from "./styled";

export const TechList = () => {

    return (
            <ContainerList>
                <ul>
                    {stacks.map((item, index) => (<li>{item}</li>))}
                </ul>
            </ContainerList>
      
    );
}